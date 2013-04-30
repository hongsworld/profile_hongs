require 'gmail'
def sendmail_to email_address
    gmail = Gmail.connect("jang2poom@gmail.com", "sinclair90")
    gmail.deliver do
      to email_address 
      subject "there was an access on hongsworld"
      text_part do
        body "there was an access on hongsworld"

      end
    end
    gmail.logout
end
sendmail_to "jang2poom@naver.com"

 
