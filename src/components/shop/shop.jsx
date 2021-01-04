import React from 'react';
import data from "../data";
import PreviewPage from "../preview/preview";
import "tachyons";


class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          collections: data,
        };
    }

    render(){
        const {collections} = this.state;
        return (
          <div className="shop-page">
            {collections.map(({ id, ...otherProps }) => (
              <PreviewPage key={id} {...otherProps} />
            ))}
          </div>
        );
    }
}

export default ShopPage;