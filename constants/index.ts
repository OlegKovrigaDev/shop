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

export const footerData = [
	{
		items: [
			{ id: 1, text: 'Доставка і Оплата', link: '/dostavka-i-oplata' },
			{ id: 2, text: 'Про нас', link: '/' },
			{ id: 3, text: 'Гарантія та Повернення', link: '/warranty' },
		],
	},
	{
		title: 'Зв’язатись з нами',
		phones: [
			{ id: 1, text: '+380666719366', link: '+380666719366' },
			{ id: 2, text: '+380976719366', link: '+380976719366' },
			{ id: 3, text: '+380506719366', link: '+380506719366' },
		],
		socials: [
			{ id: 1, icon: FaFacebook, link: '/' },
			{ id: 2, icon: FaInstagram, link: '/' },
			{ id: 3, icon: FaTiktok, link: '/' },
			{ id: 4, icon: FaYoutube, link: '/' },
		],
	},
	{
		title: 'Розклад',
		schedule: [
			{ id: 1, text: 'Будні: 09:00 - 19:00' },
			{ id: 2, text: 'Вихідні: 09:00 - 19:00' },
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

export const topList = [
	{
		id: 1,
		link: '/',
		text: 'Контакти',
		type: 'contact',
		hover: false,
	},
	{
		id: 2,
		link: '/',
		text: 'Кошик',
		type: 'cart',
		hover: true,
	},
]
