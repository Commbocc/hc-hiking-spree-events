interface Event {
  id: string;
  fields: {
    Name: string;
    DateTime: Date;
    Link: string;
    LocationUrl: [string];
    LocationName: [string];
    Published: Boolean;
  };
}
