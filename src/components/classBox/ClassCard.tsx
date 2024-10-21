import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface AssignmentProps {
  id: string;
  topLabel: string;
  bottomLabel: string;
}

interface ContainerProps {
  title: string;
  description: string;
  classGroup: string;
  topBackgroundSrc: string;
  userImageSrc: string;
  assignments: AssignmentProps[]
}

const ClassCard: React.FC<ContainerProps> = ({title, description, classGroup, topBackgroundSrc, assignments}) => {
  console.log(assignments);
  return (
    <IonCard>
      <IonCard style={{margin: 0, backgroundImage: `url(${topBackgroundSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <IonCardHeader>
          <IonCardTitle style={{ color: 'white' }}>{title}</IonCardTitle>
          <IonCardSubtitle style={{ color: 'white' }}>{description}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent style={{ color: 'white' }}>{classGroup}</IonCardContent>
      </IonCard>
      {assignments?.length > 0 ? assignments.map((assignment: AssignmentProps) => {
        return(
          <IonCardContent style={{padding: '7px 10px', border: '1px solid gray'}}>{assignment.topLabel} - {assignment.bottomLabel}</IonCardContent>
        );
      }) : undefined}
    </IonCard>
  );
};

export default ClassCard;











