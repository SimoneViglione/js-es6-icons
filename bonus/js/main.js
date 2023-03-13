const select = document.createElement("select");
select.id = "filter";

const allOption = document.createElement("option");
allOption.value = "all";
allOption.text = "All";
select.append(allOption);

const animalOption = document.createElement("option");
animalOption.value = "animal";
animalOption.text = "Animals";
select.append(animalOption);

const vegetableOption = document.createElement("option");
vegetableOption.value = "vegetable";
vegetableOption.text = "Vegetables";
select.append(vegetableOption);

const userOption = document.createElement("option");
userOption.value = "user";
userOption.text = "User";
select.append(userOption);

const container = document.getElementById("nav");
container.append(select);


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconContainer = document.getElementById('icons_container');

icons.forEach(icons => {
    const iconBox = document.createElement('div');
    iconBox.classList.add('icon_box');

    const iconIcon = document.createElement('i');
    iconIcon.classList.add(icons.prefix + `solid`, icons.prefix + icons.name , icons.color);

    const iconName = document.createElement('span');
    iconName.innerText = icons.name;

    iconBox.append(iconIcon);
    iconBox.append(iconName);
    iconContainer.append(iconBox);
});

const filter = document.getElementById('filter');

filter.addEventListener('change', function() {
	const optionType = this.value;
	const iconsFilter = icons.filter(function(icons) {
		return optionType === 'all' || icons.type === optionType;
	});

	filterIcons(iconsFilter);
});

function filterIcons(icons) {
	iconContainer.innerHTML = '';

	icons.forEach(icons => {
		const iconBox = document.createElement('div');
		iconBox.classList.add('icon_box');
		
		const iconIcon = document.createElement('i');
		iconIcon.classList.add(icons.prefix + `solid`, icons.prefix + icons.name , icons.color);
		
		const iconName = document.createElement('span');
		iconName.innerText = icons.name;
		
		iconBox.append(iconIcon);
		iconBox.append(iconName);
		iconContainer.append(iconBox);
	});
}

filterIcons(icons);

 