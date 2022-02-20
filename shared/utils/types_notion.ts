export interface IPosts {
  posts: [
    {
      archived: boolean;
      cover: string | null;
      created_by: {
        id: string;
        object: string;
      };
      created_time: string;
      icon: string | null;
      id: string;
      last_edited_by: {
        id: string;
        object: string;
      };
      last_edited_time: string;
      object: string;
      parent: {
        database_id: string;
        type: string;
      };
      properties: {
        Comment: {
          id: string;
          rich_text: [
            {
              type: string;
              annotations: {
                bold: boolean;
                code: boolean;
                color: string;
                italic: boolean;
                strikethrough: boolean;
                underline: boolean;
              };
              href: string | null;
              plain_text: string | null;
              text: {
                content: string | null;
                link: string | null;
              };
            }
          ];
        };
        Posts: {
          id: string;
          title: [
            {
              annotations: {
                bold: boolean;
                italic: boolean;
                underline: boolean;
                strikethrough: boolean;
                color: string;
                code: boolean;
              };
              href: string;
              plain_text: string;
              text: {
                content: string;
                link: string | null;
              };
              type: string;
            }
          ];
          type: string;
        };
        Tags: {
          id: string;
          multi_select: [ITags];
          type: string;
        };
      };
      type: string;
    }
  ];
}
export interface ITags {
  id: string;
  name: string;
  color: string;
}
