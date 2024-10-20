"use client";

import { IonButton, IonButtons, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisVertical, menuOutline } from 'ionicons/icons';
import '../theme/variables.css';

interface ContainerProps {
  profileImageSrc: string
}

const Header: React.FC<ContainerProps> = ({ profileImageSrc }) => {

  return (
    <IonHeader>
      <IonToolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Container flex que mantém o ícone de menu e o título alinhados à esquerda */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <IonButton style={{ '--background': 'transparent', '--background-activated': 'transparent', '--background-focused': 'transparent', '--background-activated-opacity': '0', outline: 'none', boxShadow: 'none' }}>
        <IonIcon icon={menuOutline} style={{ color: 'white' }} />  {/* Ícone na cor branca */}
        </IonButton>

        <IonTitle style={{ marginLeft: '10px', color: 'white' }}>
        <span style={{ fontWeight: 'bold' }}>Google</span> Classroom  {/* "Google" em negrito, "Classroom" normal */}
      </IonTitle>
        </div>

        {/* Colocando avatar e ícone no lado direito usando slot="end" */}
        <IonButtons slot="end">
          <IonImg src={profileImageSrc} alt="User Avatar" className="avatar" />
          <IonIcon icon={ellipsisVertical} className="small-icon" style={{ color: 'white' }} />  {/* Ícone de três bolinhas em branco */}
          </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
