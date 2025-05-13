import scss from './Header.module.scss'; 
const Header = () => {
     return (
      <div id={scss.Header}>
        <div className='container'>
         <div className={scss.content}>
           Header 
         </div>
        </div>
      </div>
    );
};
export default Header;