declare module "@sanity/block-content-to-react" {
  import * as React from "react";

  export interface BlockContentProps {
    /**
     * Pass in either an array or a single object of [Portable Text](https://github.com/portabletext/portabletext)
     *
     * *This is the only required prop*
     */
    blocks: any[] | any;
    /**
     * When more than one block is given, a container node has to be created. Passing a className will pass it on to the container.
     * @note see `renderContainerOnSingleChild`
     */
    className?: string;
    /**
     * When a single block is given as input, the default behavior is to not render any container.
     * If you always want to render the container, pass `true`.
     */
    renderContainerOnSingleChild?: boolean;
    /**
     *  Define custom serializers
     *
     */
    serializers?: any;
    /**
     * When encountering image blocks,
     * this defines which query parameters to apply in order to control size/crop mode etc.
     */
    imageOptions?: any;
    /** The ID of your Sanity project. */
    projectId?: string;
    /** Name of the Sanity dataset containing the document that is being rendered. */
    dataset?: string;
  }

  /** React component for transforming Sanity block content to React components */
  export default function BlockContent(props: BlockContentProps): JSX.Element;
}