Opis Projektu widzetu tag toolbar
Rozumiem,ze to miala byc wersja produkcyjna jednak zrobilem wszystko co w mojej mocy aby dostarczyc dzialajce rozwiazanie. Ponizej kilka uwag

BRAKI - brakuje dużo testow, z uwagi na brak czasu nie udalo sie napisac wszystkiego, brakuje rowniez przechowywania stanu
UI - do poprawy, z uwagi na ograniczony (bardzo) czas

Projekt odpalamy klasycznie npm run install -> npm run start

Podstawowe testy - npm run test

Struktura projektu:

App.tsx zawiera render komponentu Toolbar, w którym wyswietlane są wszystki elementy z podanego designu

W komponencie toolbar znajduje się logika odnośnie całego zarządzania stanem dialogami - znajdują się tam również komentarze

W tym zadaniu głównym celem bylo stworzenie komponentu tags. W folderze tags znajduje się kilka folderów:

components-styled - pliki, w których używajać styled-components ostylowano poszczególne elementy tak aby komponent wyglądał "podobnie" jak na designie

segments - segmenty czyli komponenty takie jak CMSAi czy RatingBars, CMSAI są to statyczne ikonki z opisem, ktore znajdowaly sie na designie. RatingBars jest to komponent w którym zarządzamy logiką odnośnie "siły" naszych tagów. Komentarze również znajdują się w środku.

Plik TagDialog czyli nasz core
Głownym elementem tego projektu jest komponent MUI Autocomplete, ktory zostal zmodyfikowany na potrzeby projektu.
W tym pliku poszczególne funkcje są szczegółowo opisane natomiast jeśli chodzi o Autocomplete zastosowano w nim szereg metod, które pozwoliły zaadaptować go do moich potrzeb.

Opis Modfyikacji Autocomplete:

options - sugestie zastępujące API, nie wystarczyło czasu na przygotowanie zmockowanego serwera, który by symulował realne żądania

filterOptions - zastosowano modfyikacje aby wyswietlalo sie tylko 8 propozycji

onBlur - w chwili klikniecia poza komponent autocomplete klikniete checkboxy powinny sie zresetowac

ListboxProps - design

getOptionlabel - nazwy labelek dla listy

PaperComponent - modyfikacja pola z sugestiami tak aby znajdowal sie pod nimi button z logiką do zapisu

renderOption - jak nazwa mówi, design i logika renderowanych sugestii

inputValue - wartosc inputu, w tym przypadku musiala byc zrobiona customowo aby klikanie jednej z sugestii jej nie nadpisywalo

onInputChange - zarzadzanie stanem inputvalue

isOptionEqualToValue - tylko i wylacznie na potrzeby warninga MUI

freeSolo - ustawione na true, poniewaz komponent ma dzialac "nieszablonowo"

onChange - logika odnosnie wciskania 'enter' lub wyboru

value - null na potrzeby customizacji komponentu

renderInput - Design i Logika pola input
