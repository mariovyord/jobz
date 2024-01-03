export class Thread {
  id: string;
  title: string;
  content: string;
  image: string;
  owner: string;

  constructor(
    id: string,
    title: string,
    content: string,
    image: string,
    owner: string
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.owner = owner;
  }
}
