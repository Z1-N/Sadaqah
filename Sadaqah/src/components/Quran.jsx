import React, { useState, useEffect } from "react";

const QuranDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [juzs, setJuzs] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedJuz, setSelectedJuz] = useState(1);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setChapters(data.data));

    setJuzs(Array.from({ length: 30 }, (_, i) => ({ number: i + 1, name: `الجزء ${i + 1}` })));
  }, []);

  useEffect(() => {
    const fetchVerses = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.alquran.cloud/v1/page/${currentPage}/ar.abdullahbasfar`
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        let ayahs = data.data.ayahs;

        ayahs = ayahs.map(ayah => {
          if (ayah.numberInSurah === 1 && ayah.surah.number !== 1) {
            return {
              ...ayah,
              text: ayah.text
                .replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ/gu, "")
                .trim()
            };
          }
          return ayah;
        });

        setVerses(ayahs);

        if (ayahs.length > 0) {
          const firstAyah = ayahs[0];
          setSelectedChapter(firstAyah.surah.number);
          const currentJuz = juzs.find((juz) => juz.number === firstAyah.juz);
          if (currentJuz) setSelectedJuz(currentJuz.number);
        }
      } catch (error) {
        console.error("Error fetching verses:", error);
        setVerses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVerses();
  }, [currentPage, juzs]);

  const isNewSurahStart = (verse, index, verses) => {
    if (verse.numberInSurah !== 1) return false;
    if (verse.surah.number === 1 || verse.surah.number === 9) return false;
    if (index === 0) return true;
    const prevVerse = verses[index - 1];
    return prevVerse.surah.number !== verse.surah.number;
  };

  const handleSurahChange = (e) => {
    const newSurah = Number(e.target.value);
    setSelectedChapter(newSurah);
    fetch(`https://api.alquran.cloud/v1/surah/${newSurah}`)
      .then((res) => res.json())
      .then((data) => setCurrentPage(data.data.ayahs[0].page));
  };

  const handleJuzChange = (e) => {
    const newJuz = Number(e.target.value);
    setSelectedJuz(newJuz);
    fetch(`https://api.alquran.cloud/v1/juz/${newJuz}/ar.abdullahbasfar`)
      .then((res) => res.json())
      .then((data) => setCurrentPage(data.data.ayahs[0].page));
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Section */}
      <div className="w-full max-w-4xl mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-900 text-center sm:text-left" style={{ fontFamily: "'Amiri', serif" }}>
          المصحف الشريف 
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            className="px-4 py-2 bg-white border-2 border-green-900 rounded-lg text-green-900 text-lg"
            value={selectedChapter}
            onChange={handleSurahChange}
          >
            {chapters.map((chapter) => (
              <option key={chapter.number} value={chapter.number}>
                {chapter.englishName} ({chapter.name})
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 bg-white border-2 border-green-900 rounded-lg text-green-900 text-lg"
            value={selectedJuz}
            onChange={handleJuzChange}
          >
            {juzs.map((juz) => (
              <option key={juz.number} value={juz.number}>
                {juz.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quran Page Display */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden border-4 border-amber-200">
        <div 
          className="p-6 sm:p-8 quran-page"
          style={{
            fontFamily: "'Amiri', serif",
            lineHeight: '2.8',
            minHeight: '60vh',
            fontSize: '1.8rem',
            background: 'linear-gradient(to bottom, #faf6ed 0%, #fffbf0 100%)',
            direction: 'rtl'
          }}
        >
          {loading ? (
            <div className="text-center text-2xl sm:text-3xl text-green-900 py-16">
              جاري تحميل الصفحة...
            </div>
          ) : verses.length > 0 ? (
            <p className="text-green-900 inline">
              {verses.flatMap((verse, index) => {
                const elements = [];
                
                if (isNewSurahStart(verse, index, verses)) {
                  elements.push(
                    <div key={`basmalah-${verse.surah.number}`} className="text-center my-8 surah-separator">
                      <div className="border-t-2 border-green-900 w-1/3 mx-auto mb-4 opacity-50"></div>
                      <span className="text-3xl sm:text-4xl text-green-900 block" style={{ letterSpacing: '2px' }}>
                        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                      </span>
                      <div className="mt-4 border-t-2 border-green-900 w-1/3 mx-auto opacity-50"></div>
                      <span className="text-lg sm:text-xl text-green-900 block mt-4">
                        {verse.surah.englishName} ({verse.surah.name})
                      </span>
                    </div>
                  );
                }

                elements.push(
                  <span key={verse.number} className="inline">
                    <span className="word-spacing-md" style={{ unicodeBidi: 'plaintext' }}>
                      {verse.text}
                    </span>
                    <span
                      className="aya-number"
                      style={{
                        fontSize: '1.5rem',
                        color: '#2f855a',
                        display: 'inline-block',
                        verticalAlign: 'middle', // Aligns the number vertically with the text
                        margin: '0 5px 0 1px',
                        fontFamily: "'Amiri', serif",
                        lineHeight: '1', // Ensures consistent line height
                        position: 'relative',
                        left: '0.1em',
                        top: '0.1em', // Adjusts the vertical position slightly
                      }}
                    >
                      ﴿{verse.numberInSurah}﴾
                    </span>
                  </span>
                );

                return elements;
              })}
            </p>
          ) : (
            <div className="text-center text-2xl sm:text-3xl text-green-900 py-16">
              لم يتم العثور على آيات
            </div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="w-full max-w-4xl mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          className="px-6 sm:px-8 py-3 bg-green-900 text-white rounded-lg hover:bg-green-950 disabled:bg-gray-500 transition text-lg sm:text-xl"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← الصفحة السابقة
        </button>
        
        <span className="text-lg sm:text-xl font-semibold text-green-900">
          الصفحة {currentPage}
        </span>
        
        <button
          className="px-6 sm:px-8 py-3 bg-green-900 text-white rounded-lg hover:bg-green-950 transition text-lg sm:text-xl"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          الصفحة التالية →
        </button>
      </div>
    </div>
  );
};

export default QuranDisplay;