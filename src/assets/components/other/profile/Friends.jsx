import React, { useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([
        {
            id: 1,
            name: "Akash Ahuja",
            profilePic: "https://media.glamourmagazine.co.uk/photos/62ff6d92acdddbeb62e25a81/16:9/w_2240,c_limit/EMILY%20CAREY%20INTERVIEW%20190822%20default-land-GettyImages-1411341932.jpg",
            showOptions: false
        },
        {
            id: 2,
            name: "Sia Sharma",
            profilePic: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-111398,resizemode-75,msid-109908485/magazines/panache/met-gala-2024-alia-bhatt-steals-the-show-in-a-delicate-timeless-sabyasachi-mint-green-saree-which-was-made-in-1965-hours.jpg",
            showOptions: false
        },
        {
            id: 3,
            name: "Aman Singh",
            profilePic: "https://ca-times.brightspotcdn.com/dims4/default/76311f0/2147483647/strip/true/crop/4121x2747+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F94%2F82%2F30aea31e4b189678e4b7d3ff0e34%2Fet-shah-rukh-khan-gettyimages-060.JPG",
            showOptions: false
        },
        {
            id: 4,
            name: "Manas Singh",
            profilePic: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7055/1734671297055-i",
            showOptions: false
        }
    ]);

    const toggleOptions = (id) => {
        setFriends(friends.map(friend =>
            friend.id === id ? { ...friend, showOptions: !friend.showOptions } : { ...friend, showOptions: false }
        ));
    };

    return (
        <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-5">Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {friends.map(friend => (
                    <div key={friend.id} className="relative bg-gray-100 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

                        {/* Profile Info */}
                        <div className="flex items-center">
                            <img
                                src={friend.profilePic}
                                alt={friend.name}
                                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border mr-3"
                            />
                            <span className="text-lg font-medium">{friend.name}</span>
                        </div>

                        {/* Options Button */}
                        <div className="relative ml-auto sm:ml-0">
                            <button
                                onClick={() => toggleOptions(friend.id)}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                            >
                                Options
                            </button>

                            {/* Dropdown Menu */}
                            {friend.showOptions && (
                                <div className="absolute right-0 z-10 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden">
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        View Profile
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Remove Friend
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;

