process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
const Users = require("../models/users");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "react.sports.verify@gmail.com",
      pass: "Hola1234",
    },
  });

  let sender = "react.sports.verify@gmail.com";
  let mailOptions = {
    from: sender,
    to: email,
    subject: "User email verification for registration in React Sports ",
    html: ` 
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          
            <style type="text/css">
              @media only screen and (min-width: 570px) {
          .u-row {
            width: 550px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
        
          .u-row .u-col-50 {
            width: 275px !important;
          }
        
          .u-row .u-col-100 {
            width: 550px !important;
          }
        
        }
        
        @media (max-width: 570px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: calc(100% - 40px) !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        a[x-apple-data-detectors='true'] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 55% !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 60% !important; } #u_content_text_1 .v-container-padding-padding { padding: 30px 30px 30px 20px !important; } #u_content_button_1 .v-container-padding-padding { padding: 10px 20px !important; } #u_content_button_1 .v-size-width { width: 100% !important; } #u_content_button_1 .v-text-align { text-align: left !important; } #u_content_button_1 .v-padding { padding: 15px 40px !important; } #u_content_text_3 .v-container-padding-padding { padding: 30px 30px 80px 20px !important; } #u_content_text_5 .v-text-align { text-align: center !important; } #u_content_text_4 .v-text-align { text-align: center !important; } }
            </style>
          
          
        
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #fff;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          
                
        
        
        
        
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="550" style="width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
          <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <span>&#160;</span>
                </td>
              </tr>
            </tbody>
          </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
        
        
        
        <div class="u-row-container" style="padding: 0px;background-color: white">
          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
            <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #ffffff;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="542" style="width: 542px;padding: 0px;border-top: 4px solid #d9d8d8;border-left: 4px solid #d9d8d8;border-right: 4px solid #d9d8d8;border-bottom: 4px solid #d9d8d8;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
          <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
          <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 4px solid #d9d8d8;border-left: 4px solid #d9d8d8;border-right: 4px solid #d9d8d8;border-bottom: 4px solid #d9d8d8;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
          
        <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
              
              <img align="center" border="0" src="https://ourimagehosting.com/images/2022/04/16/Logo_react_final2.png" alt="Wrong Email" title="Wrong Email" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 30%;max-width: 159px;" width="159" class="v-src-width v-src-max-width"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px 30px 40px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div class="v-text-align" style="color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="font-size: 14px; line-height: 140%;"><span style="font-family: 'Crimson Text', serif; font-size: 14px; line-height: 19.6px;"><strong><span style="font-size: 22px; line-height: 30.8px;">Hello!</span></strong></span></p>
        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; font-family: 'Crimson Text', serif;">Please click on the following button to verify your account. Thank you.</span></p>
        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px; font-family: 'Crimson Text', serif;">React Sports® </span></p>
        
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <div class="v-text-align" align="left">
          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td class="v-text-align" style="font-family:arial,helvetica,sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:46px; v-text-anchor:middle; width:456px;" arcsize="6.5%" strokecolor="#ced4d9" strokeweight="3px" fillcolor="#91a5e2"><w:anchorlock/><center style="color:#000000;font-family:arial,helvetica,sans-serif;"><![endif]-->
            <a href=http://localhost:4000/api/verify/${uniqueString} target="_blank" class="v-size-width" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #fff; background-color: #f93943; border-radius: 3px;-webkit-border-radius: 3px; -moz-border-radius: 3px; width:100%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #ced4d9; border-top-style: solid; border-top-width: 3px; border-left-color: #ced4d9; border-left-style: solid; border-left-width: 3px; border-right-color: #ced4d9; border-right-style: solid; border-right-width: 3px; border-bottom-color: #ced4d9; border-bottom-style: solid; border-bottom-width: 3px;">
              <span class="v-padding" style="display:block;padding:15px 40px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">C L I C K&nbsp; &nbsp;H E R E</span></span>
            </a>
          <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
        </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        
          
        
        </body>
        
        </html>
        `,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
};

const userController = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params;

    const user = await Users.findOne({ uniqueString: uniqueString });
    if (user) {
      user.emailVerify = true;
      await user.save();
      res.redirect("https://react-sports-5.herokuapp.com/signIn");
    } else {
      res.json({
        success: false,
        response: "Your email has not been verified",
      });
    }
  },

  signUpUser: async (req, res) => {
    console.log(req.body.userData);
    let {
      firstName,
      lastName,
      email,
      password,
      image,
      adress,
      city,
      country,
      from,
      isAdmin,
    } = req.body.userData;

    try {
      const userExist = await Users.findOne({ email });

      if (userExist) {
        if (userExist.from.indexOf(from) !== -1) {
          res.json({
            success: false,
            from: "signUp",
            message:
              "There is already an account associated with the email entered",
          });
        } else {
          const hashedPassword = bcryptjs.hashSync(password, 10);
          userExist.from.push(from);
          userExist.password.push(hashedPassword);
          if (from === "signUp") {
            userExist.uniqueString = crypto.randomBytes(15).toString("hex");
            await userExist.save();
            await sendEmail(email, userExist.uniqueString);

            res.json({
              success: true,
              from: "singUp",
              message:
                "We send you an email to validate your registration. Please check your mailbox to confirm",
            });
          } else {
            userExist.save();

            res.json({
              success: true,
              from: "signUp",
              message: "We add " + from + " to your means to login",
            });
          }
        }
      } else {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = await new Users({
          firstName,
          lastName,
          email,
          password: [hashedPassword],
          image,
          adress,
          city,
          country,
          uniqueString: crypto.randomBytes(15).toString("hex"),
          emailVerify: false,
          isAdmin,
          from: [from],
        });
        if (from !== "signUp") {
          await newUser.save();
          res.json({
            success: true,
            from: "singUp",
            message: "Congratulations, your user has been created with " + from,
          });
        } else {
          await newUser.save();
          await sendEmail(email, newUser.uniqueString);

          res.json({
            success: true,
            from: "signUp",
            message:
              "We send you an email to validate your registration. Please check your mailbox to confirm",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Oops, an error occurred, please try again",
      });
    }
  },

  signInUser: async (req, res) => {
    const { email, password, from } = req.body.userData;

    try {
      const userExist = await Users.findOne({ email });

      if (!userExist) {
        res.json({
          success: false,
          message:
            "We have not found an account associated with that email address. Please sign up",
        });
      } else {
        if (from !== "signIn") {
          let passwordMatches = userExist.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );

          if (passwordMatches.length > 0) {
            const userData = {
              id: userExist._id,
              firstName: userExist.firstName,
              lastName: userExist.lastName,
              email: userExist.email,
              image: userExist.image,
              from: userExist.from,
              isAdmin: userExist.isAdmin,
            };
            await userExist.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message: "Welcome again " + userData.firstName,
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not registered with " +
                from +
                ". If you want to enter with that means please signUp with " +
                from,
            });
          }
        } else {
          console.log("usuario logueado");
          if (userExist.emailVerify) {
            let passwordMatches = userExist.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
            if (passwordMatches.length > 0) {
              const userData = {
                id: userExist._id,
                firstName: userExist.firstName,
                lastName: userExist.lastName,
                email: userExist.email,
                image: userExist.image,
                from: userExist.from,
                isAdmin: userExist.isAdmin,
              };
              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });
              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: "Welcome again " + userData.firstName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "Your email or password is incorrect",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not verified your email. Please check your mailbox to continue",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Oops, an error occurred, please try again",
      });
    }
  },

  signOutUser: async (req, res) => {
    console.log("usuario deslogueado");
    const email = req.body.userData;
    const user = await Users.findOne({ email });
    await user.save();
    res.json({
      success: true,
      message: "Your session has been closed",
    });
  },

  verifyToken: (req, res) => {
    if (!req.err) {
      res.json({
        success: true,
        response: {
          id: req.user.id,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          email: req.user.email,
          image: req.user.image,
          adress: req.user.adress,
          city: req.user.city,
          country: req.user.country,
          isAdmin: req.user.isAdmin,
          from: "token",
        },
        message: "Welcome again " + req.user.firstName,
      });
    } else {
      res.json({ success: false, message: "Please signIn again" });
    }
  },
};

module.exports = userController;
