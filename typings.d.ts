export interface Post {
  _id: string;
  publishedAt: string;
  _createdAt: string;
  title: string;
  comments: Comment[];
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
      _type: string;
    };
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: [
    {
      _key: string;
      title: string;
      _ref: string;
    }
  ];
  slug: {
    current: string;
    _type: string;
  };
  body: TypedObject | TypedObject[];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
