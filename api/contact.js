export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const { name, email, subject, message } = req.body || {}

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    const envKeys = Object.keys(process.env)
      .filter(
        (key) =>
          key.includes('BREVO') ||
          key.includes('GITHUB') ||
          key.includes('EMAIL')
      )
      .sort()

    const debug = {
      githubTokenExists: !!process.env.GITHUB_TOKEN,
      brevoKeyExists: !!process.env.BREVO_API_KEY,
      senderEmailExists: !!process.env.BREVO_SENDER_EMAIL,
      loadedKeys: envKeys,
    }

    console.log('Environment Check:', debug)

    if (!process.env.BREVO_API_KEY) {
      return res.status(500).json({
        success: false,
        message: 'BREVO_API_KEY is missing',
        debug,
      })
    }

    if (!process.env.BREVO_SENDER_EMAIL) {
      return res.status(500).json({
        success: false,
        message: 'BREVO_SENDER_EMAIL is missing',
        debug,
      })
    }

    const brevoResponse = await fetch(
      'https://api.brevo.com/v3/smtp/email',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: 'Portfolio Contact Form',
            email: process.env.BREVO_SENDER_EMAIL,
          },

          to: [
            {
              email: 'lingarobotics@gmail.com',
              name: 'Ramalingam',
            },
          ],

          replyTo: {
            email,
            name,
          },

          subject: `[Portfolio] ${subject}`,

          htmlContent: `
            <h2>New Portfolio Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr />

            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      }
    )

    const rawResponse = await brevoResponse.text()

    console.log('Brevo Raw Response:', rawResponse)

    let data = {}

    try {
      data = rawResponse ? JSON.parse(rawResponse) : {}
    } catch {
      data = {
        raw: rawResponse,
      }
    }

    if (!brevoResponse.ok) {
      console.error('Brevo Error:', data)

      return res.status(brevoResponse.status).json({
        success: false,
        message: 'Failed to send email',
        details: data,
        debug,
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data,
      debug,
    })
  } catch (error) {
    console.error('Contact API Error:', error)

    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
      stack: error.stack,
    })
  }
}