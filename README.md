https://github.com/Psychology4me/psych.git

patric@165.227.140.22:/home/patric/repo/psycho

scp -r package.json build patric@165.227.140.22:/home/patric/www/

ls /home/patric

psychology4.me {
  root * /home/patric/www/build
  reverse_proxy * localhost:3000
}
165.227.140.22:
http://165.227.140.22:3000# psychology4.me
