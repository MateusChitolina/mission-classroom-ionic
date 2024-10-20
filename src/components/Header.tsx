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
      <IonToolbar className="flex-toolbar">
        <IonButtons slot="start">
          <IonButton>
            <IonIcon icon={menuOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle>Google Classroom</IonTitle>
        <IonImg src={profileImageSrc} alt="User Avatar" className="avatar" />
        <IonIcon icon={ellipsisVertical} />
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
