# CoffeeShop
Даний проект являє собою просту модель інтернет-магазину кави без будь-якого бекенду. До етапу роботи корзини було все зрозуміло та особливий проблем не виникало. Суть проблеми, яку я не можу вирішити заключається в компоненті  BuyCoffee. Логіку роботи даного компоненту я побудував на отриманні даних з AboutIt (coffeeId) та через props - defsultValues. Зміна state повинна була б записуватись в LocalStorage та підвантажуватись після перерендеру компонента, таким чином вибрані позиції coffee-item залишались би в корзині.
Наскільки я зрозумів, в даному компоненті я допустив помилку в роботі LocalStorage та в цілому у логіці роботи самого компонента, оскільки при спробі додати логіку видалення  coffee-item (onDelete) - останній доданий елемент в корзину не видалявся. Думаю це відбувається тому, що спочатку компонент  BuyCoffee рендериться, а потім вже грузився в LocalStorage, тобто логіка видалення працювала, але елемент, що видалявся одразу ж і з’являвся в корзині, оскільки отримував вхідні параметри при кожному перерендері. Я спробував повністю змінити логіку компонента BuyCoffee та замість нього створив новий компонент - Cart. До нього я прив’язав контекст та  LocalStorage з яким вже не взаємодіяв напряму. Логіку роботи Ви я думаю побачите, вона вже вроді правильна, проте реалізувати даній компонент я не зміг. Спробував багато різних варіантів, але результату вони не дали. В останньому варіанті, вибраний компонент додається в корзину, але код зациклюється…( Десь я не до кінця зрозумів принцип роботи того, що хотів реалізувати.
Що мені потрібно:
1)  В разі якщо в роботі застосунку допущені суттєві помилки які вимагають зміни його архітектури роботи - вкажіть на них та зазначте яким чином їх можна усунути.
2) Якщо глобальних змін не потрібно - допоможіть закінчити роботу над компонентом Cart (спочатку з теоретичної сторони, а потім практично)
3) Завершити роботу над «проектом» - додати лічильники coffee-item в корзині та відображення загальної кількості одиниць. Тут більше цікавить кодревью того як я зможу реалізувати даний функціонал самостійно.
4) Робота над якимось проектом складнішого рівня під Вашим керівництвом.

Мінімальні пункти - 1 та 2. В разі якщо такий формат Вам цікавий, то буду радий рухатись далі в напрямку вивчення ReactJs
Мій рівень на даний час - закінчив курси на UDEMY, пореалізовував всі проекти на курсі і от спробував щось створити повністю самостійно.