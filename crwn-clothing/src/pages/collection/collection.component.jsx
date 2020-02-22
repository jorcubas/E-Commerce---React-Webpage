import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection, selectCollections} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const {title, items} = collection;
    return(
        <div className='collection-page'> 
            <h2> COLLECTION PAGE</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/>))
                }
            </div>
        </div>
)};

// ownProps: second parameter from mapstateToProps that gives back
// props that are getting from Collection Page Component
// Including The Match Component from that page Component. 

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

