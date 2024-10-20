import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps {
  title: string;
  description: string;
  classGroup: string;
  topBackgroundSrc: string;
  userImageSrc: string;
  assignments: {id: string, topLabel: string, bottomLabel: string}[]
}

const ClassCard: React.FC<ContainerProps> = ({title, description, classGroup, topBackgroundSrc }) => {
  return (
    <IonCard style={{ backgroundImage: `url(${topBackgroundSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{description}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{classGroup}</IonCardContent>
    </IonCard>
  );
};

export default ClassCard;











