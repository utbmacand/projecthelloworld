document.addEventListener('DOMContentLoaded', function () {
    var countryList = [
        { name: "Afghanistan", value: "afghanistan" },
        { name: "Albania", value: "albania" },
        { name: "Algeria", value: "algeria" },
        { name: "Andorra", value: "andorra" },
        { name: "Angola", value: "angola" },
        { name: "Antigua and Barbuda", value: "antigua_and_barbuda" },
        { name: "Argentina", value: "argentina" },
        { name: "Armenia", value: "armenia" },
        { name: "Australia", value: "australia" },
        { name: "Austria", value: "austria" },
        { name: "Azerbaijan", value: "azerbaijan" },
        { name: "Bahamas", value: "bahamas" },
        { name: "Bahrain", value: "bahrain" },
        { name: "Bangladesh", value: "bangladesh" },
        { name: "Barbados", value: "barbados" },
        { name: "Belarus", value: "belarus" },
        { name: "Belgium", value: "belgium" },
        { name: "Belize", value: "belize" },
        { name: "Benin", value: "benin" },
        { name: "Bhutan", value: "bhutan" },
        { name: "Bolivia", value: "bolivia" },
        { name: "Bosnia and Herzegovina", value: "bosnia_and_herzegovina" },
        { name: "Botswana", value: "botswana" },
        { name: "Brazil", value: "brazil" },
        { name: "Brunei", value: "brunei" },
        { name: "Bulgaria", value: "bulgaria" },
        { name: "Burkina Faso", value: "burkina_faso" },
        { name: "Burundi", value: "burundi" },
        { name: "Cabo Verde", value: "cabo_verde" },
        { name: "Cambodia", value: "cambodia" },
        { name: "Cameroon", value: "cameroon" },
        { name: "Canada", value: "canada" },
        { name: "Central African Republic", value: "central_african_republic" },
        { name: "Chad", value: "chad" },
        { name: "Chile", value: "chile" },
        { name: "China", value: "china" },
        { name: "Colombia", value: "colombia" },
        { name: "Comoros", value: "comoros" },
        { name: "Congo, Democratic Republic of the", value: "congo_democratic_republic_of_the" },
        { name: "Congo, Republic of the", value: "congo_republic_of_the" },
        { name: "Costa Rica", value: "costa_rica" },
        { name: "Croatia", value: "croatia" },
        { name: "Cuba", value: "cuba" },
        { name: "Cyprus", value: "cyprus" },
        { name: "Czech Republic", value: "czech_republic" },
        { name: "Denmark", value: "denmark" },
        { name: "Djibouti", value: "djibouti" },
        { name: "Dominica", value: "dominica" },
        { name: "Dominican Republic", value: "dominican_republic" },
        { name: "Ecuador", value: "ecuador" },
        { name: "Egypt", value: "egypt" },
        { name: "El Salvador", value: "el_salvador" },
        { name: "Equatorial Guinea", value: "equatorial_guinea" },
        { name: "Eritrea", value: "eritrea" },
        { name: "Estonia", value: "estonia" },
        { name: "Eswatini", value: "eswatini" },
        { name: "Ethiopia", value: "ethiopia" },
        { name: "Fiji", value: "fiji" },
        { name: "Finland", value: "finland" },
        { name: "France", value: "france" },
        { name: "Gabon", value: "gabon" },
        { name: "Gambia", value: "gambia" },
        { name: "Georgia", value: "georgia" },
        { name: "Germany", value: "germany" },
        { name: "Ghana", value: "ghana" },
        { name: "Greece", value: "greece" },
        { name: "Grenada", value: "grenada" },
        { name: "Guatemala", value: "guatemala" },
        { name: "Guinea", value: "guinea" },
        { name: "Guinea-Bissau", value: "guinea_bissau" },
        { name: "Guyana", value: "guyana" },
        { name: "Haiti", value: "haiti" },
        { name: "Honduras", value: "honduras" },
        { name: "Hungary", value: "hungary" },
        { name: "Iceland", value: "iceland" },
        { name: "India", value: "india" },
        { name: "Indonesia", value: "indonesia" },
        { name: "Iran", value: "iran" },
        { name: "Iraq", value: "iraq" },
        { name: "Ireland", value: "ireland" },
        { name: "Israel", value: "israel" },
        { name: "Italy", value: "italy" },
        { name: "Jamaica", value: "jamaica" },
        { name: "Japan", value: "japan" },
        { name: "Jordan", value: "jordan" },
        { name: "Kazakhstan", value: "kazakhstan" },
        { name: "Kenya", value: "kenya" },
        { name: "Kiribati", value: "kiribati" },
        { name: "Korea, North", value: "korea_north" },
        { name: "Korea, South", value: "korea_south" },
        { name: "Kosovo", value: "kosovo" },
        { name: "Kuwait", value: "kuwait" },
        { name: "Kyrgyzstan", value: "kyrgyzstan" },
        { name: "Laos", value: "laos" },
        { name: "Latvia", value: "latvia" },
        { name: "Lebanon", value: "lebanon" },
        { name: "Lesotho", value: "lesotho" },
        { name: "Liberia", value: "liberia" },
        { name: "Libya", value: "libya" },
        { name: "Liechtenstein", value: "liechtenstein" },
        { name: "Lithuania", value: "lithuania" },
        { name: "Luxembourg", value: "luxembourg" },
        { name: "Madagascar", value: "madagascar" },
        { name: "Malawi", value: "malawi" },
        { name: "Malaysia", value: "malaysia" },
        { name: "Maldives", value: "maldives" },
        { name: "Mali", value: "mali" },
        { name: "Malta", value: "malta" },
        { name: "Marshall Islands", value: "marshall_islands" },
        { name: "Mauritania", value: "mauritania" },
        { name: "Mauritius", value: "mauritius" },
        { name: "Mexico", value: "mexico" },
        { name: "Micronesia", value: "micronesia" },
        { name: "Moldova", value: "moldova" },
        { name: "Monaco", value: "monaco" },
        { name: "Mongolia", value: "mongolia" },
        { name: "Montenegro", value: "montenegro" },
        { name: "Morocco", value: "morocco" },
        { name: "Mozambique", value: "mozambique" },
        { name: "Myanmar", value: "myanmar" },
        { name: "Namibia", value: "namibia" },
        { name: "Nauru", value: "nauru" },
        { name: "Nepal", value: "nepal" },
        { name: "Netherlands", value: "netherlands" },
        { name: "New Zealand", value: "new_zealand" },
        { name: "Nicaragua", value: "nicaragua" },
        { name: "Niger", value: "niger" },
        { name: "Nigeria", value: "nigeria" },
        { name: "North Macedonia", value: "north_macedonia" },
        { name: "Norway", value: "norway" },
        { name: "Oman", value: "oman" },
        { name: "Pakistan", value: "pakistan" },
        { name: "Palau", value: "palau" },
        { name: "Palestine", value: "palestine" },
        { name: "Panama", value: "panama" },
        { name: "Papua New Guinea", value: "papua_new_guinea" },
        { name: "Paraguay", value: "paraguay" },
        { name: "Peru", value: "peru" },
        { name: "Philippines", value: "philippines" },
        { name: "Poland", value: "poland" },
        { name: "Portugal", value: "portugal" },
        { name: "Qatar", value: "qatar" },
        { name: "Romania", value: "romania" },
        { name: "Russia", value: "russia" },
        { name: "Rwanda", value: "rwanda" },
        { name: "Saint Kitts and Nevis", value: "saint_kitts_and_nevis" },
        { name: "Saint Lucia", value: "saint_lucia" },
        { name: "Saint Vincent and the Grenadines", value: "saint_vincent_and_the_grenadines" },
        { name: "Samoa", value: "samoa" },
        { name: "San Marino", value: "san_marino" },
        { name: "Sao Tome and Principe", value: "sao_tome_and_principe" },
        { name: "Saudi Arabia", value: "saudi_arabia" },
        { name: "Senegal", value: "senegal" },
        { name: "Serbia", value: "serbia" },
        { name: "Seychelles", value: "seychelles" },
        { name: "Sierra Leone", value: "sierra_leone" },
        { name: "Singapore", value: "singapore" },
        { name: "Slovakia", value: "slovakia" },
        { name: "Slovenia", value: "slovenia" },
        { name: "Solomon Islands", value: "solomon_islands" },
        { name: "Somalia", value: "somalia" },
        { name: "South Africa", value: "south_africa" },
        { name: "South Sudan", value: "south_sudan" },
        { name: "Spain", value: "spain" },
        { name: "Sri Lanka", value: "sri_lanka" },
        { name: "Sudan", value: "sudan" },
        { name: "Suriname", value: "suriname" },
        { name: "Sweden", value: "sweden" },
        { name: "Switzerland", value: "switzerland" },
        { name: "Syria", value: "syria" },
        { name: "Taiwan", value: "taiwan" },
        { name: "Tajikistan", value: "tajikistan" },
        { name: "Tanzania", value: "tanzania" },
        { name: "Thailand", value: "thailand" },
        { name: "Timor-Leste", value: "timor_leste" },
        { name: "Togo", value: "togo" },
        { name: "Tonga", value: "tonga" },
        { name: "Trinidad and Tobago", value: "trinidad_and_tobago" },
        { name: "Tunisia", value: "tunisia" },
        { name: "Turkey", value: "turkey" },
        { name: "Turkmenistan", value: "turkmenistan" },
        { name: "Tuvalu", value: "tuvalu" },
        { name: "Uganda", value: "uganda" },
        { name: "Ukraine", value: "ukraine" },
        { name: "United Arab Emirates", value: "united_arab_emirates" },
        { name: "United Kingdom", value: "uk" },
        { name: "United States", value: "usa" },
        { name: "Uruguay", value: "uruguay" },
        { name: "Uzbekistan", value: "uzbekistan" },
        { name: "Vanuatu", value: "vanuatu" },
        { name: "Vatican City", value: "vatican_city" },
        { name: "Venezuela", value: "venezuela" },
        { name: "Vietnam", value: "vietnam" },
        { name: "Yemen", value: "yemen" },
        { name: "Zambia", value: "zambia" },
        { name: "Zimbabwe", value: "zimbabwe" }
    ];

    var countrySelect = document.getElementById('country');
    countryList.forEach(function (country) {
        var option = document.createElement('option');
        option.value = country.value;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });

    function capitalizeFirstLetter(input) {
        input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    }

    var fnameInput = document.getElementById('fname');
    var lnameInput = document.getElementById('lname');

    fnameInput.addEventListener('blur', function () {
        capitalizeFirstLetter(fnameInput);
    });

    lnameInput.addEventListener('blur', function () {
        capitalizeFirstLetter(lnameInput);
    });

    window.handleSubmit = function() {
        alert('Form submitted successfully!');
        window.location.href = 'about.html';
        return false;
    };

    const privacyPolicyLink = document.getElementById('privacyPolicyLink');
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const popupClose = document.querySelector('.popup-close');

    privacyPolicyLink.addEventListener('click', function(event) {
        event.preventDefault();
        popupOverlay.style.display = 'block';
        popup.style.display = 'block';
    });

    popupClose.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        popup.style.display = 'none';
    });
});