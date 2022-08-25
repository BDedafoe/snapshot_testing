import Card from 'react-bootstrap/Card';

function Githubcard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='/Users/bdedafoe/Desktop/brittany-projects/snapshot_testing/snapshot-tests/src/gitHubPic.jpg'/>
      <Card.Body>
        <Card.Title>Brittany Dedafoe</Card.Title>
        <Card.Text>
          German beer and soccer cheers are some of my favorite things. 
          Hiking and biking make up for the beers but nothing beats a great game of soccer. 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Githubcard;