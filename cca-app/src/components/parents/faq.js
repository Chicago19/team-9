import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class Faq extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='FAQ'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>FAQ</h1>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Questions About Counseling</h2>
            <h3>
              • Why should my child go to counseling? : Counseling (aka therapy) can help your child work through this traumatic experience. It can also help you gain a better understanding of what your child is going through; Sexual abuse cn have wide-reacing and long lasting effects on your child’s physical and mental health. With support from a caring adult and high quality treatment, many children and parents effectively recover and may even feel stronger and closer as a family in the aftermath of a traumatic experience.
            </h3>
            <h3>
              • What is play therapy? : Play therapy is the mode of counseling that is often used for young children; It uses play, children’s natural way of expression, to help them express their feelings more easily through play instead of words.

            </h3>
            <h3>
            • How long does a child receive counseling? : The length of time a child is seen in counseling varies from child to child; It depends upon the severity of the trauma, the child’s personality, and how the child perceived the trauma.
            </h3>
            <h3>
            • Where can I get help for myself? : You can benefit from talking to a counselor who can assist you in overcoming the distress naturally associated with discovering that your child has been abused; Talk with your Family Advocate at CCAC about where you can get help for yourself.
            </h3>
            <h3>
            • What about support groups? : Support groups are places where children can express their minds and be open with others.
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Questions About Crime Victims Compensation</h2>
            <h3>
              • Who is eligible? : A person killed or injured as a result of a violent crime; The parent of a person killed or injured in Illinois as a result of a violent crime; Dependents of homicide victims; A person who personally witnessed a violent crime in Illinois or a person whose testimony establishes a necessary nexus between the offender and the violent crime; A minor who is the brother, sister, half-brother, half-sister, child, or stepchild of a person killed or injured in Illinois.
            </h3>
            <h3>
              • What crimes are covered? : Arson, Assault, Battery, Criminal Sexual Abuse, Criminal Sexual Assault, Stalking, Hate Crimes, Homicide, Human Trafficking
            </h3>
            <h3>
              • What are the basic qualification requirements? : Notify law enforcement within 72 hours of the crime’s occurrence. In cases of sexual assault, sexual abuse, or human trafficking, notify law enforcement within 7 days; File an application within 2 years of the crime date; Cooperate with law enforcement to arrest and prosecute the offender; The vicgtim must not have contributed to or provoked the crime.
            </h3>
            <h3>
              • What type of expenses may the Crime Victim Compensation Program pay? : Medical, hospital, and dental expenses; Lost wages (up to a maximum of $1,250 per month) due to time missed from work that was not reimbursed by employer with sick, vacation, or personal paid time; Accessibility costs (e.g., wheelchair, walker, crutches, shower stool); Loss of support if the decedent was employed and supporting dependents.
            </h3>
            <h3>
              • Do I have to use insurance or other sources of payment? : Yes, the Illinois Crime Victims Compensation Program is the payor of last resort. All other sources of payment must be exhausted before an award may be issued.
            </h3>
            <h3>
              • What types of expenses cannot be paid by the Crime Victim Compensation Program? : Any expenses not related to the crime; Stolen, damaged or lost property; Pain and suffering.
            </h3>
            <h3>
              • What happens when the Crime Victim Compensation Program receives my application? : Your application will be reviewed; Our office will obtain the police report and other documents necessary to determine your eligibility; The Court of Claims will render a final decision based on the application and the Attorney General’s recommendation; The final decision will be mailed to you.
            </h3>
            <br></br>
          </Col>
        </Row>
        </Container>
     );
  }
}

export default Faq;
