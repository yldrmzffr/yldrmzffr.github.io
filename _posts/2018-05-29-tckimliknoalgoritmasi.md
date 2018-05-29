---
layout: post
category: Karalama
title: TC Kimlik Numarası Algoritması ve Örnekleri
---
###TC KİMLİK NUMARASI ALGORİTMASI


TC kimlik numaraları rastgele üretilmiş numaralar değil. Belirli bir algoritmaya göre üretilmiş.
Tabi kendi içinde de belirli bozulmayan sabit kuralları var. 
Sisteminizde, kullanıcıdan TC Kimlik numarası alırken bu 
kurallara tabi tutarsanız doğru veya yanlış olabileceği hakkında bilginiz olabilir. 
Random girişleri bir oranda engelleyebilirsiniz. 



Peki bu sabit kurallar nedir?



<b>TC Kimlik Numarası</b>

<b>1.</b> 11 Karakterden oluşur.

<b>2.</b> Asla “0” ile başlamaz.


<b>3.</b> 1,3,5,7 ve 9. hanelerinin toplamının 7 katından,
2,4,6 ve 8. hanelerinin toplamını çıkarıp, çıkan sonucun 10’a bölümünden kalanını alığımızda (Mod10’u) 10. hane veriyor.


<b>4.</b> İlk 10 hanenin toplamının 10’a bölümünden kalanını alığımızda (Mod10’u) 11. haneyi veriyor.

Böylece girilen kimlik numarasının ilk 9 hanesi ile bu işlemleri yapıp 10. ve 11. haneyi bulup karşılaştırdığımızda kimlik numarasının doğru olup olamayacağı hakkında bilgi sahibi olabiliriz.

Bu algoritmayı faklı dillerde yazıp GitHub a ekliyorum. Sizde diğer dillerde eklemek, geliştirmek veya kullanmak isterseniz<a href="https://github.com/yldrmzffr/TCNOAlgoritmasi" target="_blank"> buradan</a> gidebilirsiniz.





