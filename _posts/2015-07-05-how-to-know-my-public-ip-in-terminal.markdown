---
layout: post
title: "How to know my public IP in terminal"
date: 2015-07-05 14:00:00
categories: command terminal linux ip
---
Hi everybody, today i share a simple list for get your public IP in linux command line.

First command, check your IP using dyndns service is very long command.
```
curl -s http://checkip.dyndns.org/ | grep -o "[[:digit:].]\+"
```

This is short command and very easy to remember.
```
curl ifconfig.me
```

Ipify is the same than ifconfig but response is in ```JSON``` format, prefer for webservices or other apps.
```
curl 'https://api.ipify.org?format=json'
```

Mi favorite is this command, is very elegant only send a request to obtain IP using DNS server.
```
dig +short myip.opendns.com @resolver1.opendns.com
```

Other command is the same that others.
```
curl ip.appspot.com
```

For to use this commands you need to install ```curl``` and ```dig``` packages

For use ```curl``` install ```sudo aptitude install curl```

For use ```dig```  ```sudo aptitude install dnsutils```
