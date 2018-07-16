---
layout: post
title: Ubuntu da Apache, MySql, PHP ve phpMyAdmin Kurulumu
---


### Adım1 : Paket Listesini Güncelleyin
<blockquote>
sudo apt-get update
</blockquote>

### Adım 2 : Apache Yükleme

Apache yüklemek için komut :
<blockquote>
sudo apt-get install apache2
</blockquote>

Bu adımdan sonra http://ipadresiniz (kendi bilgisayarınızda çalışıyorsanız http://localhost) e girip Apache karşılama ekranını görebilirsiniz.


### Adım 3 : MySql Yükleme
Apache yüklemek için komut :
<blockquote>sudo apt-get install mysql-server</blockquote>

Karşınıza şifre belirleme ekranı gelecek. Daha sonra değiştirmek ve güvenlik problemleri ile uğraşmamak için sağlam bir şifre belirleyiniz.


### Adım 4: Yaygın Olarak Kullanılan Eklentilerle PHP Kurulumu

PHP'yi ve yaygın olarak kullanılan uzantıları yükleyin:

<blockquote>sudo apt-get install php libapache2-mod-php php-mysql php-curl php-gd php-json php-mcrypt php-zip</blockquote>
Gerekirse, daha sonra uzantılar yükleyebilirsiniz.



### 8. Adım: phpMyAdmin'i yükleme
PhpMyAdmin kurun:
<blockquote>sudo apt-get install phpmyadmin</blockquote>

Web sunucusu türünü seçmeniz istenecektir. Varsayılan seçim apache2 olacaktır. Seçmek için boşluk tuşuna basın. apache2 yazısının yanında * belirecektir. Şimdi Yes düğmesini seçmek için Tab tuşuna basın. Yes seçeneği kırmızı olunca enter tuşuna basın.


Daha sonra, phpmyadmin için veritabanı dbconfig-common ile yapılandırılıp yapılandırılmayacağı sorulacaktır. Evet'i seçin ve Enter'a tıklayın.

Daha sonra MySql root hesabının şifresini girmeniz istenecektir. MySql'i yüklerken yazdığınız şifreyi girin. Ok tuşunu seçmek için Sekme tuşunu kullanın ve enter tuşuna basın.
Ardından şifreyi tekrar yazın ve onaylayın.

Panele http://ipadresiniz/phpmyadmin (kendi bilgisayarınızda çalışıyorsanız http://localhost/phpmyadmin)  adresinden ulaşabilirsiniz.

Kurulum bitti. Tazelenmesi ve daha düzgün çalışması için apache yi aşağıdaki komutla yeniden başlatın.
<blockquote>
sudo service apache2 restart
</blockquote>



