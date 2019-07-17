---
layout: post
title: Python pip paketi oluştuma
---

## Python pip paketi yapımı

Python yükelebilir pip paketi yapma ve pypi a yüklemeyi kısaca yazdım. Bunları uygulayarak kendi pip paketinizi oluşturabilirsiniz.


Home dizinine .pypirc adında bir dosya oluşturun. Içine ise kendi bilgilerinizi şu formatta yazın.

    [distutils]
    index-servers =
    pypi

    [pypi]
    repository: https://pypi.python.org/pypi
    username: [kullanici_adi]
    password: [parola]

Projeyi Github a push edip

    git tag 0.1 -m 'versiyon adi'
    git push origin 0.1


Proje diznine setup.py dosyası oluşturun.

    from distutils.core import setup

    setup(
    name = 'projeismi',
    packages = ['projeismi'], 
    version = '0.1',
    description = 'proje açıklaması',
    author = 'isim',
    author_email = 'mail',
    url = 'https://github.com/kullaniciadi/projeadi',
    download_url = 'https://github.com/kullaniciadi/projeadi/tarball/0.1',
    keywords = ['projeetiketi', 'projeetiketi'],
    install_requires = ["kurulması","gereken","paketler"],
    classifiers = [],
    )


setup.cfg oluşturup Readme tanımlıyoruz.

    [metadata]
    description-file = README.md


Lisansımızı ekleyip aşağıdaki kodu çalıştırıyoruz.

    python setup.py sdist upload -r pypi


Artık aşağıdaki formatta paketimizi kurabiliriz.

    pip install paketismi