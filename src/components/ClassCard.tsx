import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
}

const ClassCard: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
};

export default ClassCard;











