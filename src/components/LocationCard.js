import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard({ loc }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{loc.name}</Card.Header>
        <Card.Meta>{loc.type}</Card.Meta>
        <Card.Description> {loc.residents.length} Residents</Card.Description>
      </Card.Content>
    </Card>
  );
}

