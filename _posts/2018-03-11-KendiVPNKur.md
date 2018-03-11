---
layout: post
title: Kendi VPN Sunucusu Nasıl Kurulur?- OpenVPN 
---
 
Bu yazıda kendi VPS imize OpenVPN kurup kendi VPN imize bağlanacağız.
 
VPS almak için bir çok firma var. Ben fiyatından dolayı Aruba firmasından aldım, aylık 1 Euro ücreti var.
 
VPS imizi aldığımızı ve Ubuntu kurduğumuzu varsayıyorum.
Benim VPS imde bu yazıyı yazdığım tarihteki Ubuntu nun son stabil sürümü Ubuntu 16.04 sürümü kurulu.
(Bu işlemler firmadan firmaya değişiklik göstereceği ve kolay olduğu için ayrıntıya girmiyorum.)
 
Şimdi geldi VPS e bağlanmaya.
Windows kullananlar Putty İndirerek bağlanabilir. Ben Ubuntu kullandığım için terminal e doğrudan bağlantı komutu verebiliyorum.
<blockquote>
ssh kullaniciadi@server.ip.adresi
</blockquote>
Şifre isteyecek şifremizi girelim.
 
İlk olarak OpenVpn i VPS e indirelim.
<blockquote> 
sudo wget http://swupdate.openvpn.org/as/openvpn-as-2.5-Ubuntu16.amd_64.deb
</blockquote>
OpenVPN i kurmak için aşağıdaki komutu girelim.
<blockquote>
dpkg -i openvpn-as-2.5-Ubuntu16.amd_64.deb
 </blockquote>
VPN şuan oluşturuldu ama şifre henüz belirlemedik
<blockquote>		
sudo passwd openvpn
</blockquote>
Komutunu verip şifre belirleyelim.
 
 
OpenVPN Arayüzü
 
Yönetici arayüzü: https://server.ip.adresi: 943/admin
Kullanıcı arayüzü: https://server.ip.adresi: 943/
 
Arayüze bağlanırken sertifikadan dolayı güvensiz tarzında bir hata çıkabilir. Endişelenmeyin ve devam et e tıklayın.
 
Kullanıcı Adınız : openvpn
Şifreniz : Yukarıda belirlediğiniz şifre
 
Kullanıcı arayüzü ne login olunca OpenVPN e nasıl bağlanıldığı hakkında yardımları görebilirsiniz.
 
Not: OpenVpn ücretsiz sürümü kullandığımız için en fazla 2 cihaz bağlanabilir.
 
Kendinize özel VPN in keyfini çıkarın.
