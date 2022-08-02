import logoNavBar from '../../img/logoNavBar.png'
import logoNameNavBar from '../../img/logoNameNavBar.png'
import menuOpenNavBar from '../../img/menuOpenNavBar.png'
import { AppHeaderRightSideBar } from '../AppHeaderRightSideBar/AppHeaderRightSideBar';
import { openMobileMenu } from '../MobileMenu/MobileMenu';

export function AppHeader() {
  const imageSize = "30";

  return (
    <div className="App-Header bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href='https://miss-you.ru'>
              <img className="block h-12 w-auto" src={ logoNavBar } alt="Logo" /> 
            </a>
            <img className="visible h-8 ml-2 w-auto" src={ logoNameNavBar } alt="LogoName" />
          </div>
          <img className="visible md:hidden cursor-pointer h-8 ml-2 w-auto" src={ menuOpenNavBar } onClick={ openMobileMenu } alt="LogoMenu" />  
          <div className="hidden md:block md:ml-6">
            <AppHeaderRightSideBar />
          </div>    
        </div>
      </div>
    </div>
  );
}
