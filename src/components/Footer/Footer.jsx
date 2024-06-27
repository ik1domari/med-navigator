import FooterContacts from "./FooterContacts";

export default function Footer() {
	return (
		<footer className='footer'>
			<FooterContacts isInFooter={true} />
			<div className='footer__container--text'>
				<div className='footer__text'>ООО “МИП &quot;МЕДНАВИГАТОР&quot;</div>
				<div className='footer__text'>ИНН 7203565753</div>
				<div className='footer__text'>КПП 720301001</div>
				<div className='footer__text'>ОГРН/ОГРНИП 1237200020045</div>
			</div>
		</footer>
	);
}
