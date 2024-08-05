import React, { useState } from 'react';

const DragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isDropped, setIsDropped] = useState(false);

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(data);
        const dropzone = e.target;
        dropzone.appendChild(draggableElement);
        setIsDragging(false);
        setIsDropped(true);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Drag and Drop</h1>
            <div
                id="draggable"
                draggable="true"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: isDragging ? 'red' : 'blue',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px auto',
                    cursor: 'move',
                }}
            >
                Drag me
            </div>
            <div
                id="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{
                    width: '300px',
                    height: '300px',
                    border: '2px solid black',
                    backgroundColor: isDragging ? 'lightgray' : 'White',
                    margin: '20px auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isDropped ? 'Dropped!' : 'Drop here'}
            </div>
        </div>
    );
};

export default DragAndDrop;
