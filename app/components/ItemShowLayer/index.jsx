import React, { PropTypes, } from 'react';
import marked from 'marked';

import './style.scss';

const propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ItemShowLayer({ item, onEdit, onDelete, }) {
  if (!item || !item.id) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里的文章</div>
      </div>
    );
  }

  const content = marked(item.content);

  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button onClick = {() => onEdit(item.id)} className="btn btn-primary">编辑</button>
        <button onClick={() => onDelete(item.id)} className="btn btn-primary">删除</button>
      </div>
      <h2>{item.title}</h2>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{ __html: content, }}></div>
      </div>
    </div>
  );
}

ItemShowLayer.propTypes = propTypes;

export default ItemShowLayer;
