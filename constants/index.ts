import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'

export const products = [
	{
		id: '1',
		img: '/slide1-min.jpg',
		title: 'Двоярусне ліжко "Аляска" від MebiGrand',
		oldPrice: '90000',
		newPrice: '10000',
		hit: true,
		discont: true,
		newProduct: false,
	},
	{
		id: '2',
		img: '/slide2-min.jpg',
		title: 'Двоспальне ліжко «Прованс»',
		newPrice: '20000',
		hit: true,
		discont: false,
		newProduct: true,
	},
	{
		id: '3',
		img: '/slide3-min.jpg',
		title: 'Елегантне та стильне ліжко "Верона" від фабрики UMa Ursa Major',
		oldPrice: '29000',
		newPrice: '30000',
		hit: false,
		discont: true,
		newProduct: true,
	},
	{
		id: '4',
		img: '/slide4-min.jpg',
		title: 'Елегантне та стильне ліжко "Монро"',
		oldPrice: '39000',
		newPrice: '40000',
	},
	{
		id: '5',
		img: '/slide1-min.jpg',
		title: 'Двоярусне ліжко "Аляска" від MebiGrand2',
		oldPrice: '49000',
		newPrice: '50000',
	},
	{
		id: '6',
		img: '/slide2-min.jpg',
		title: 'Двоспальне ліжко «Прованс»2',
		oldPrice: '59000',
		newPrice: '60000',
	},
	{
		id: '7',
		img: '/slide3-min.jpg',
		title: 'Елегантне та стильне ліжко "Верона" від фабрики UMa Ursa Major2',
		oldPrice: '69000',
		newPrice: '70000',
	},
	{
		id: '8',
		img: '/slide4-min.jpg',
		title: 'Елегантне та стильне ліжко "Монро"2',
		oldPrice: '79000',
		newPrice: '80000',
	},
]

export const categories = [
	{ id: 1, name: 'Кухні', image: '/Categories/Cat1.jpg', rowSpan: 2 },
	{ id: 2, name: 'Шафи', image: '/Categories/Cat2.jpg' },
	{ id: 3, name: 'Офісні меблі', image: '/Categories/Cat3.jpg' },
	{ id: 4, name: 'Ліжка', image: '/Categories/Cat2.jpg' },
	{ id: 5, name: 'Дивани', image: '/Categories/Cat1.jpg', rowSpan: 2 },
	{ id: 6, name: 'Комоди і тумби', image: '/Categories/Cat3.jpg' },
]

export const footer = [
	{
		title: 'Контакти:',
		schedule: [
			{
				id: 1,
				field: 'Відділ продажу',
				text: '+38 (095) 127 76 43',
				link: 'tel:+380951277643',
			},
			{
				id: 2,
				field: 'Режим роботи',
				text: '08:00 - 18:00 ПН - СБ 08:00 - 16:00 ВС',
			},
			{
				id: 3,
				field: 'Зворотній зв’язок',
				text: 'info@tera-mebly.com',
				link: 'mailto:info@tera-mebly.com',
			},
		],
	},
	{
		title: 'Інформація:',
		items: [
			{ id: 1, text: 'Про нас', link: '/' },
			{ id: 2, text: 'Доставка і Оплата', link: '/dostavka-i-oplata' },
			{ id: 3, text: 'Гарантія та Повернення', link: '/warranty' },
		],
	},
	{
		title: 'Ми у соцмережах:',
		socials: [
			{ id: 1, icon: FaFacebook, link: '/' },
			{ id: 2, icon: FaInstagram, link: '/' },
			{ id: 3, icon: FaTiktok, link: '/' },
			{ id: 4, icon: FaYoutube, link: '/' },
		],
	},
]

export const ethapsData = [
	{
		id: 1,
		title: 'Вибір',
		text: 'У нашому магазині Ви можете знайти будь-які товари для дому або можете скористатись допомогою наших менеджерів',
	},
	{
		id: 2,
		title: 'Узгодження з менеджером',
		text: 'Наші менеджери з радістю підкажуть  варіанти доставки і оплати саме для вас',
	},
	{
		id: 3,
		title: 'Відправка',
		text: 'Після узгодження деталей з доставки і оплати наші працівники відправляють товар  в умовлений час',
	},
]

export const advantagesData = [
	{
		id: 1,
		title: 'Широкий асортимент',
		text: "Ми пропонуємо великий вибір меблів для будь-яких кімнат та стилів інтер'єру.",
		icon: '/Advantages/Assortement.svg',
	},
	{
		id: 2,
		title: 'Індивідуальний підхід',
		text: 'Ми завжди готові врахувати ваші побажання та створити меблі на замовлення.',
		icon: '/Advantages/Individual.svg',
	},
	{
		id: 3,
		title: 'Гарантія якості',
		text: 'Ми завжди готові врахувати ваші побажання та створити меблі на замовлення.',
		icon: '/Advantages/Garanty.svg',
	},
	{
		id: 4,
		title: 'Доступність',
		text: 'Ми прагнемо пропонувати конкурентоспроможні ціни без шкоди для якості.',
		icon: '/Advantages/Availability.svg',
	},
	{
		id: 5,
		title: 'Професійна консультація',
		text: 'Наші експерти завжди готові надати кваліфіковану допомогу у виборі меблів, які ідеально підходять саме вам.',
		icon: '/Advantages/Professional.svg',
	},
]

export const heroData = [
	{ id: 1, text: 'Кухонні меблі' },
	{ id: 2, text: 'Меблі у вітальню' },
	{ id: 3, text: 'Меблі у спальню' },
	{ id: 4, text: 'Меблі для передпокою' },
	{ id: 5, text: 'Офісні меблі' },
	{ id: 6, text: 'Шафи' },
	{ id: 7, text: 'М’які  меблі' },
	{ id: 8, text: 'Ліжка' },
	{ id: 9, text: 'Матраци' },
	{ id: 10, text: 'Комоди й тумби' },
]

export const cartItems = [
	{
		id: 1,
		name: 'Product 1',
		price: 100,
		quantity: 1,
		imageUrl: '/slide2-min.jpg',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 200,
		quantity: 1,
		imageUrl: '/slide2-min.jpg',
	},
]

export const contactsData = [
	{
		id: 1,
		title: 'Відділ продажу',
		phone: '+380951277643',
		type: 'email',
		email: 'fortecya.plus@gmail.com',
	},
	{
		id: 2,
		title: 'м.Балта Одеська обл.',
		phone: '+380508035033',
		type: 'social',
		icons: [FaFacebook, FaInstagram, FaTiktok],
	},
	{
		id: 3,
		title: 'м.Подільськ Одеська обл.',
		phone: '+380958976864',
		type: 'social',
		icons: [FaFacebook, FaInstagram],
	},
	{
		id: 4,
		title: 'м.Первомайськ Миколаївська обл.',
		phone: '+380508712779',
		type: 'social',
		icons: [FaFacebook, FaInstagram],
	},
	{
		id: 5,
		title: 'м.Одеса',
		phone: '+380662533771',
		type: 'social',
		icons: [FaInstagram, FaTiktok],
	},
]

export const maps = {
	2: [
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.054083614874!2d30.539861293217214!3d50.328242222855785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c7a7290bea67%3A0x387df3660abbeb5c!2z0LLRg9C7LiDQm9GO0LHQvtC80LjRgNGB0YzQutCwLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1725192914102!5m2!1suk!2sua',
		'вул.Любомирська, 163',
	],
	3: [
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.406483081815!2d30.19988039324387!3d50.414897816665295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b356dda082741%3A0xe7a8e9dab176f101!2z0LLRg9C70LjRhtGPINCh0L7QsdC-0YDQvdCwLCAxOTQsINCT0L7RgNC10L3QuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDA4MTE0!5e0!3m2!1suk!2sua!4v1725194005878!5m2!1suk!2sua',
		'вул.Соборна, 194',
	],
	4: [
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.406483081815!2d30.19988039324387!3d50.414897816665295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b356dda082741%3A0xe7a8e9dab176f101!2z0LLRg9C70LjRhtGPINCh0L7QsdC-0YDQvdCwLCAxOTQsINCT0L7RgNC10L3QuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDA4MTE0!5e0!3m2!1suk!2sua!4v1725194005878!5m2!1suk!2sua',
		'вул.Соборна, 194',
	],
	5: [
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.406483081815!2d30.19988039324387!3d50.414897816665295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b356dda082741%3A0xe7a8e9dab176f101!2z0LLRg9C70LjRhtGPINCh0L7QsdC-0YDQvdCwLCAxOTQsINCT0L7RgNC10L3QuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDA4MTE0!5e0!3m2!1suk!2sua!4v1725194005878!5m2!1suk!2sua',
		'вул.Соборна, 194',
	],
}
