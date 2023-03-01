import Image from 'next/image'
import { socialButtonsData } from '../../util';

export default () => {
  return (
    <ul className="list-inline social-buttons">
      {
        socialButtonsData && socialButtonsData.map(({ url, icon }, index) =>
          <li key={`SocialButons-${index}`} className="list-inline-item">
            <a className="d-flex align-items-center" href={url}>
              <Image className="icons" src={icon} alt="" />
            </a>
          </li>
        )
      }
    </ul>
  )
}