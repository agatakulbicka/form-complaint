Through this application you can send complaints of purchased products.
This project uses: HTML5, CSS3 (SASS), JavaScript, jQuery, AJAX, Twitter Bootstrap 4.
This project connects with API: Google Maps and languagelayer (https://languagelayer.com)

Use case for a client who wants to file a complaint on complaint product.

## 1.	A client enters page on localhost.

## 2.	The complaint-form is divided into two parts: in first parts the client enters  data of the complained product and shop. In the second parts the client enters his contact information.

## 3.	Firstly, the client see button ‘Pomocnik-Klik’. After the client cliks on button display information with button ‘Załaduj dane’. If the client has completed the form, but refresh the page here he has a chance to retrieve his data.

## 4.	Data of the defective product and the shop:

a)	Field: ‘Nazwa reklamowanego towaru:’ –  name of the product – required;

b)	Field: ‘Data zakupu:’ – date of purchuase. Client can enter date between today and the year from today – required;

c)	Field: ‘Opis wady:’ – client enters description of complaint. This text is validated by languadelayer API. Text should be written in Polish. After leaving this field on the top of the page appears an alert with the information -  if client entered text in Polish and if there were no problems during the validation and  connection with API. This action is validated by ajax success end error callbacks – required;

d)	Field: ‘Dodaj zdjęcie wadliwego produktu:’ – client enters the photo of the defective product. The size of loaded image should be max 1024x683 px and the type of loaded image should be ‘jpeg’. If loaded image is bigger or has wrong type, client get information and the photo will not be loaded. After loading the first photo display field to load another one. Client can load up to three photos - the first photo is required;

e)	Field: ‘Miasto:’: Client shoud use searchbox and find the shop in which he bought the defective product. After selecting a record from the list there will be auto-completion of data in fields: ‘Nazwa firmy:’ (required), ‘Adres:’ (required), ‘Numer telefonu komórkowego:’, ‘Strona internetowa:’. Client can correct all these data manually.
‘Numer telefonu komórkowego:’ is validating by regular expression. If this field will be empty or will be filled by ‘brak’ – there will be no validation by regular expression (field is not required).

## 5.	Data of the client:

a)	Field: ‘Imię i nazwisko:’ – client enters his first name and last name – required;

b)	Field: ‘Imię i nazwisko:’ – client enters his first name and last name – required;

c)	Fields: ‘Ulica:’, ‘Numer domu/mieszkania:’, ‘Kod pocztowy;’, ‘Miejscowość:’  – client enters his address – required;
Field ‘Kod pocztowy:’ - This field is validated by a regular expression;

f)	Field: ‘Telefon kontaktowy’ – client can enter his phone number. This field is validated by a regular expression. Only when the client fills this field the radio ‘telefoniczny’ in ‘Preferowana forma kontaktu:’ field will be active.

g)	Field: ‘Adres email – client can enter his email address. This field is validated by HTML5. Only when the client fills this field the radio ‘mailowy’ in ‘Preferowana forma kontaktu:’ field will be active.

d)	Field: ‘Preferowana forma rekompensaty’ – the client can select preferred way of compensation.

e)	Field: ‘Preferowana forma kontaktu:’ – the client can check preferred way of contact. ‘Pocztowy’ is checked as default but after entering phone number or/and e-mail client can change checked radio (vide 4.f-4.g).

## 6.	Field: checkbox ‘Żeby wysłać reklamację, musisz zaakceptować regulamin’ – default checked is set on false. The client must consciously confirm read the rules. While checkbox is set on false, client will not submin the form – required;
If client clicks on the link ‘regulamin” then will display modal with rules.

##7.	Button: ‘Wyśli formularz’ – default this button is disabled. Only when the client will accept chcecbox (vide 5) this button won’t be disabled. When the client cliks on the button then all inputs in the form will be validated. If any input is incorrect there will be displaying information.


