
// feather icons
(function () {
	'use strict'
	feather.replace()
})()

var app = new Vue({
	el: '#app',
	components: {feather},
	data(){
		return {
			image_show: '',
			images: ['ayam.jpg', 'burung.jpg', 'kambing.jpg', 'kelinci.jpg', 'kucing1.jpg', 'kucing2.jpg', 'kuda.jpg', 'monyet.jpg', 'rusa.jpg', 'sapi.jpg', 'titan.jpeg'],
			form: {
				name: '',
				phone: '',
				ticket: '',
				message: '',
			},
		}
	},
	methods: {
		showImage(image){
			this.image_show = image;
		},
		sendMessage(){
			let name = this.form.name.length > 0 ? this.form.name : 'Mr/Mrs Zoo';
			let phone = this.form.phone.length > 0 ? this.form.phone : '08xxxxxx';
			let ticket = this.form.ticket.length > 0 ? this.form.ticket : '10';
			let message = this.form.message.length > 0 ? this.form.message : 'Aku mau booking tiket ke Garoot Kids Land';
			let whatsapp = `https://wa.me/628119869991?text=Hai, saya mau booking tiket ke Garoot Kids Land%0aNama : ${name}%0aTelpon : ${phone}%0aJumlah Tiket : ${ticket}%0aPesan : ${message}`;
			window.open(whatsapp, '_blank');
		}
	}
});



// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var navbar = document.getElementById("myNavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
		navbar.classList.add("bg-green-light");
		navbar.classList.add("navbar-dark");
		navbar.classList.remove("navbar-light");
	} else {
		navbar.classList.remove("sticky");
		navbar.classList.remove("bg-green-light");
		navbar.classList.remove("navbar-dark");
		navbar.classList.add("navbar-light");
	}
}

// parallax
var rellax = new Rellax('.rellax');
