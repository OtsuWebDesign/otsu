### Nauczyłem się git-owego formatowania dokumentów XD
## Placeholderowe grafiki pochodzą ze strony Freepik.
Licencja Free wygląda tak:
```
IMPORTANT NOTICE: This license only applies if you downloaded this content as
an unsubscribed user. If you are a premium user (ie, you pay a subscription)
you are bound to the license terms described in the accompanying file
"License premium.txt".

---------------------

You must attribute the image to its author:

In order to use a content or a part of it, you must attribute it to iconicbestiary / Freepik,
so we will be able to continue creating new graphic resources every day.


How to attribute it?

For websites:

Please, copy this code on your website to accredit the author:
<a href="http://www.freepik.com">Designed by iconicbestiary / Freepik</a>

For printing:

Paste this text on the final work so the authorship is known.
- For example, in the acknowledgements chapter of a book:
"Designed by iconicbestiary / Freepik"


You are free to use this image:

- For both personal and commercial projects and to modify it.
- In a website or presentation template or application or as part of your design.

You are not allowed to:

- Sub-license, resell or rent it.
- Include it in any online or offline archive or database.
```
Problem polega na tym, że nie istnieje coś takiego jak dobre **darmowe** grafiki. Zdjęcia stockowe- jak najbardziej, ale graficy generalnie nie są zbyt skorzy to oddawania swojej roboty za darmoche.
Tak szczerze, to **ja** nie mam żadnego problemu, żeby korzystać sobie za darmo z tych graficzek i w zamian ich screditować, ale wygląda to nieprofesjonalnie jak mam być szczery. Freepik i shutterstock mają na prawdę dobry wybór. Więc albo robimy na stronie jakąś podstronę, do której link będzie gdzieś w stopce i będzie się nazywał np "credited authors" i tam kulturalnie wytłumaczymy, że nie mamy kasy na drogie jpgi stockowe, więc creditujemy w zamian za korzystanie z nich za darmo, albo będzie trzeba zapłacić za subskrypcję :c

Podrzucam linki do wykorzystanych grafik:
```
https://www.freepik.com/free-vector/flat-check-list-design_953317.htm
https://www.freepik.com/free-vector/happy-office-worker_1528639.htm
https://www.freepik.com/free-vector/professional-programmer-engineer-writing-code_1311615.htm#term=office&page=1&position=16
```

Licencja premium za to to już coś kompletnie innego
```
IMPORTANT NOTICE: This license only applies if you downloaded this content as
a subscribed (or "premium") user. If you are an unsubscribed user (or "free"
user) you are bound to the license terms described in the accompanying file
"License free.txt".

---------------------

You can download from your profile in Freepik a personalized license stating
your right to use this content as a "premium" user:

  https://profile.freepik.com/my_downloads

You are free to use this image:

- For both personal and commercial projects and to modify it.
- In a website or presentation template or application or as part of your design.

You are not allowed to:

- Sub-license, resell or rent it.
- Include it in any online or offline archive or database.

The full terms of the license are described in sections 7 and 8 of the Freepik
terms of use, available online in the following link:

  http://www.freepik.com/terms_of_use

The terms described in the above link have precedence over the terms described
in the present document. In case of disagreement, the Freepik Terms of Use
will prevail.

```

Przemyś sprawe. A teraz o czymś innym...

## AOS to kozak
Generalnie czytałem trochę o tych animacjach, które się triggerują od scrollowania i uznałem, że najlepszym (a na pewno najszybszym i najłatwiejszym) rozwiązaniem jest wykorzystanie **AOS** . Najważniejsze to jest to, że jest w dużym stopniu CSS3-driven, a nie opiera się na JS-ie. Jak to ujął sam autor:
>You may say it's like WOWJS, yeah - you're right, effect is similar to WOWJS, but I had a different idea how to make such a plugin, so here it is. CSS3 driven scroll animation library.
Można zamiast tego użyć wowjs-a bo też daje rade ale imho aos to kozak jakich mało.
Jeśli byśmy robili credited authors i tak to bym spropsował tego gościa.
Linka podsyłam oczywiście jak pan Jezus powiedział:
```
https://michalsnik.github.io/aos/
```
Oczywiście można też samemu pisać animki.....

![Komu to potrzebne?](https://media1.tenor.com/images/c66879a4a5435667cf8e232cf5814145/tenor.gif?itemid=5537421)

Na końcu indexu musiałem zincludować 2 pliki - jeden css a drugi js. Link jest z **jego hosta**. Więc jeśli chemy być kompletnie zabezpieczeni to będzie trzeba ściągnąć te pliki i linkować je lokalnie.

# Tyle
