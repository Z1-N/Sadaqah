import React from 'react';

const Hero = () => {
    return (
            <div className="flex items-center justify-center min-h-screen bg-amber-50">
                <div className="max-w-md p-6 bg-white rounded-lg shadow-2xl text-center">
                    <img 
                        src="src/assets/Hero.jpg" 
                        alt="Sadaqah Image" 
                        className="mx-auto w-96 h-96 rounded-lg shadow-md mb-6"
                    />
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">
                        صدقه جارية للمغفور له بإذن الله
                    </h1>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        صدقة الجارية هي الوقف ، وهي الواردة في حديث أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال : 
                        ( إذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إلاَّ مِنْ ثَلاَثٍ : صَدَقَةٍ جَارِيَةٍ ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ ) رواه مسلم
                    </p>
                    <a href="src/assets/Hero.jpg" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                            تبرع الآن
                        </button>
                    </a>
                </div>
            </div>
        );
};

export default Hero;