const corpoMotivation = [
    "KPI są nie tylko absolutnie konieczne, by nas motywowały. One są kluczowe, by utrzymać nas przy życiu!",
    "Przyszłość firmy zależy od Ciebie!",
    "Uwolnij potencjał!",
    "Rób błędy, ale ich nie powtarzaj!",
    "Aby najlepiej przygotować się do ciężkiej pracy jutro, pracuj ciężko dziś!",
    "Kluczem nie jest priorytetyzowanie co jest w Twoim planie pracy, ale planowanie swoich priorytetów.",
    "Poprzez naukę na błędach i współpracę, najlepsze rozwiązania dla klienta mogą być dostarczone!",
    "Wierzymy w pomysły!",
    "To pokonane przeszkody są miarą sukcesu!",
    "Każdy pracownik jest projektem. Bądź tym najbardziej opłacalnym!",
    "Zawsze patrz na szczyt, właśnie tam zmierzasz!",
    "Ciężka praca popłaca!",
    "Pora na działanie jest teraz!",
    "Produkuje maszyna, człowiek tworzy.",
    "Pokaż innym, jak pracować!",
    "Jutro zaczyna się dziś!",
    "Wiara przenosi góry, zwątpienie je usypuje!",
    "Mamy być cały czas lepsi w tym co robimy!",
    "Twórz wyższe wartości!",
    "Nie możesz wspiąć się na drabinę sukcesu z rękami w kieszeniach.",
    "Kamienie węgielne dla zrównoważonego sukcesu to sz…er, praca zespołowa, ciężka praca oraz lojalność.",
    "Życie jest jak tetris - porażki się mnożą, sukcesy znikają.",
    "Musisz robić wyniki, nie a wymówki!",
    "My inwestujemy pieniądze, Ty zainwestuj swój pot!",
    "Zmień swoje nastawienie a zmienisz swoje wyniki!",
    "Pchnij swoją wydajność na wyższy poziom!",
    "Profesjonalizm w każdym detalu.",
    "Każda porażka jest okazją, żeby spróbować jeszcze raz, tylko mądrzej.",
    "Myśl poza schematami!",
    "Skoncentruj się na tworzeniu i dostarczaniu wartości dla innych!",
    "Pracuj ciężko i baw się świetnie!",
    "Najpierw klient!",
    "Osoba, która mówi, że to nie może być zrobione nie powinna przeszkadzać osobie, która właśnie to robi."
]

export function GetRandomMotivation() {
    return corpoMotivation[getRandomNumber(0, corpoMotivation.length - 1)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}