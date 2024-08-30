export const htmlContent: string = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 20px 0;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .content h2 {
                color: #333333;
            }
            .content p {
                color: #666666;
                font-size: 16px;
                line-height: 1.5;
            }
            .content .code {
                font-size: 24px;
                font-weight: bold;
                color: #333333;
                margin: 20px 0;
                padding: 10px;
                border: 1px solid #dddddd;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .footer {
                text-align: center;
                padding: 20px;
                font-size: 14px;
                color: #999999;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Verify Your Email</h1>
            </div>
            <div class="content">
                <h2>Hello,</h2>
                <p>Thank you for registering with us. To complete your registration, please verify your email address by entering the following verification code:</p>
                <div class="code">{verificationToken}</div>
                <p>If you did not request this verification, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;

export const generateWelcomeEmailHtml = (name: string) => {
    return `
          <html>
            <head>
              <style>
                .email-container {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  padding: 20px;
                  background-color: #f4f4f4;
                  border-radius: 10px;
                  max-width: 600px;
                  margin: auto;
                }
                .email-header {
                  background-color: #4CAF50;
                  color: white;
                  padding: 10px;
                  text-align: center;
                  border-radius: 10px 10px 0 0;
                }
                .email-body {
                  padding: 20px;
                  background-color: white;
                  border-radius: 0 0 10px 10px;
                }
                .email-footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="email-header">
                  <h1>Welcome to Patel Food!</h1>
                </div>
                <div class="email-body">
                  <p>Hi ${name},</p>
                  <p>Congratulations! Your email has been successfully verified.</p>
                  <p>We are excited to have you on board at Patel Food. Explore our platform and enjoy our services.</p>
                  <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                  <p>Best Regards,<br/>The Patel Food Team</p>
                </div>
                <div class="email-footer">
                  <p>&copy; 2024 Patel Food. All rights reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `;
};

export const generatePasswordResetEmailHtml = (resetURL: string) => {
    return `
      <html>
        <head>
          <style>
            .email-container {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              padding: 20px;
              background-color: #f4f4f4;
              border-radius: 10px;
              max-width: 600px;
              margin: auto;
            }
            .email-header {
              background-color: #d9534f;
              color: white;
              padding: 10px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .email-body {
              padding: 20px;
              background-color: white;
              border-radius: 0 0 10px 10px;
            }
            .email-footer {
              text-align: center;
              padding: 10px;
              font-size: 12px;
              color: #777;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              margin: 20px 0;
              font-size: 16px;
              color: white;
              background-color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>Reset Your Password</h1>
            </div>
            <div class="email-body">
              <p>Hi,</p>
              <p>We received a request to reset your password. Click the button below to reset it.</p>
              <a href="${resetURL}" class="button">Reset Password</a>
              <p>If you didn't request a password reset, please ignore this email.</p>
              <p>Thank you,<br/>The Patel Food Team</p>
            </div>
            <div class="email-footer">
              <p>&copy; 2024 Patel Food. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };

  export const generateResetSuccessEmailHtml = () => {
    return `
      <html>
        <head>
          <style>
            .email-container {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              padding: 20px;
              background-color: #f4f4f4;
              border-radius: 10px;
              max-width: 600px;
              margin: auto;
            }
            .email-header {
              background-color: #4CAF50;
              color: white;
              padding: 10px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .email-body {
              padding: 20px;
              background-color: white;
              border-radius: 0 0 10px 10px;
            }
            .email-footer {
              text-align: center;
              padding: 10px;
              font-size: 12px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>Password Reset Successful</h1>
            </div>
            <div class="email-body">
              <p>Hi,</p>
              <p>Your password has been successfully reset. You can now log in with your new password.</p>
              <p>If you did not request this change, please contact our support team immediately.</p>
              <p>Thank you,<br/>The Patel Food Team</p>
            </div>
            <div class="email-footer">
              <p>&copy; 2024 Patel Food. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };