import React from 'react';

const IslandFour: React.FC<{ onHover: () => void, onLeave: () => void }> = ({ onHover, onLeave }) => {
    return (
        <svg width="157" height="85" viewBox="0 0 157 85" fill="none" xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <g filter="url(#filter0_b_1733_8401)">
                <mask id="path-1-inside-1_1733_8401" fill="white">
                    <path d="M156.401 46.4763C156.401 46.4763 155.498 47.5947 155.282 48.0459C155.066 48.4972 154.89 49.3016 154.792 49.694C154.694 50.0864 154.262 50.8123 154.262 50.8123L149.847 52.8136L145.256 55.011L144.06 55.9135L139.998 56.0901H138.841L137.369 54.8933L136.427 54.187L134.014 54.1478L131.915 54.187L130.718 54.1478L128.756 54.2458C128.756 54.2458 128.05 53.7161 127.598 53.4807C127.147 53.2648 127.01 53.1668 126.657 53.1668C126.303 53.1668 124.91 54.4224 124.91 54.4224L122.281 58.1698L119.201 59.6806L117.023 60.485L113.59 60.7008C113.59 60.7008 111.176 62.0939 110.823 62.4863C110.47 62.8787 108.547 64.5463 108.547 64.5463L108.096 67.2735L106.703 68.745L105.408 68.8431L105.016 70.7267L103.819 71.8842L103.78 73.807L100.837 76.5734L99.581 77.6525L97.9722 77.6918L97.1285 79.124L94.5779 80.4582L93.5577 80.9094L92.4393 81.498L92.1254 82.5183L91.1444 83.5385L88.7312 84.1663L87.0831 84.9315L86.9653 85.01L86.1021 83.205L83.3357 82.0474L81.099 78.3784L79.8433 74.4544L79.9414 71.5114L79.4117 70.6089C79.4117 70.6089 77.0965 69.7064 76.194 69.0001C75.2915 68.2938 75.6643 67.7444 75.6643 67.7444C75.6643 67.7444 73.4276 66.8615 72.9763 66.7634C72.5251 66.6653 70.7396 68.3723 70.7396 68.3723C70.7396 68.3723 70.3865 68.6469 69.2289 68.7254C68.0713 68.8235 66.1878 68.902 66.1878 68.902L64.5005 70.9621L60.9296 74.7095H58.8695L57.7904 74.3563L56.3582 73.8266L56.8879 70.8836L57.6923 69.3729L57.7904 68.2938L57.2607 67.2147L56.1031 66.8615L54.8474 66.9596L54.2196 67.6659L52.4342 68.6469L50.1975 68.745L48.1374 70.0792L46.45 72.5709L46.0969 73.0222L40.9172 74.1013L38.9552 72.9437L34.58 73.1203L31.892 71.3349L29.8319 68.0387L29.3022 66.6064L28.2231 64.9191L27.4187 64.6444H26.163L24.2795 65.802L21.9643 65.3508L20.4535 66.2533L19.1979 67.8621L17.3143 67.509C17.3143 67.509 14.0182 66.3514 13.2923 66.2533C12.8606 66.1944 12.4094 66.8811 12.1347 67.4305L10.879 65.233H9.93725L7.66133 64.9584L6.99425 62.9571L6.18983 59.2097L5.11075 58.5426L3.22719 57.8755L1.61833 56.404V54.7952L2.95254 52.2446L3.22719 49.3016V46.4959L2.69747 44.0827L0.813965 42.4738L2.28546 39.5308L3.61961 37.2549L5.36576 35.6461L6.03283 33.6448C6.03283 33.6448 6.1702 31.7613 6.30754 30.7018L7.64169 29.8974L8.30876 28.5633V26.562L8.03411 26.0323L6.42526 24.6981L4.42404 23.364L3.22719 22.6969L2.14811 21.8925L1.8734 20.0089L2.01076 18.0077L3.75696 14.1229L5.22846 12.2394L5.89554 11.1603L11.3891 6.3338L13.665 2.44905L14.96 0.133905H15.1758L20.944 0.310478L24.1618 0.663624L31.1661 2.13512L31.8332 2.52752L33.6186 4.90155L35.0508 5.60787L36.1692 6.19648L38.0527 7.09898L38.3274 7.68759L38.3666 10.0028L38.7198 11.023L40.054 12.5337L40.4463 14.1426L39.3673 14.3192L38.347 14.1426L37.9938 14.1033L37.5033 14.4565L37.0128 14.9078L37.6015 17.0071L38.2685 17.6349L41.133 16.5558L42.0748 15.7907L43.0165 15.9672L42.7026 17.3603L43.3697 18.5571L44.1349 20.4798L45.2533 21.7748L46.3323 22.0494L47.0975 19.9893L47.0583 19.0083L47.8235 18.0273L47.5095 16.8305L46.1754 15.7122L45.783 14.6331L44.6646 13.554L42.6634 12.573L41.7216 11.7686V11.1015L42.6242 10.6502L44.7628 10.4736L45.0374 9.70844L45.1355 8.59012L44.8216 7.78569L42.1925 6.62812L41.9178 6.17684L40.4463 5.05851L39.5046 4.15598C39.5046 4.15598 38.7983 3.44968 38.7983 3.07691C38.7983 2.70413 39.5046 2.23324 40.0932 2.05666C40.6818 1.88008 42.1925 1.60541 42.1925 1.60541L45.3121 1.78198L48.2158 2.80223L49.5108 4.09712L50.6291 5.0389L51.2177 5.49016L53.1405 4.33258H53.7291L56.0443 4.96041L57.7315 6.11798L59.1638 6.70659L59.7524 6.92241L61.0866 9.23758L61.7144 11.9648L61.6752 13.0438L66.2663 13.0831L70.1903 14.1033C70.1903 14.1033 71.701 15.2609 72.1523 15.7514C72.6035 16.2419 74.1535 17.8115 74.1535 17.8115L76.2528 19.5969L80.0983 21.9121L82.6882 22.4026L83.885 23.1678C83.885 23.1678 85.4546 23.0697 86.0628 23.0697C86.671 23.0697 91.066 23.4228 91.066 23.4228L94.7349 23.776L100.797 23.2855L104.82 23.5602L106.919 24.188L110.215 24.7178L118.122 25.9146L120.574 25.6007C120.574 25.6007 122.713 26.0911 123.203 26.5424C123.694 26.9937 125.578 27.9354 125.578 27.9354C125.578 27.9354 127.265 28.6417 128.383 28.5633C129.502 28.4652 133.426 27.9747 133.426 27.9747L136.682 27.5823L138.291 26.6405L140.842 26.3658L142.725 27.3861L144.295 29.1715L144.884 31.4082L145.099 33.1936L148.317 36.5486C148.317 36.5486 153.889 39.4524 154.027 39.5897C154.164 39.7271 155.361 40.9827 155.812 41.689C156.263 42.3954 156.793 43.1213 156.97 43.8669C157.146 44.6124 156.479 46.5548 156.479 46.5548L156.401 46.4763Z" />
                </mask>
                <path d="M156.401 46.4763C156.401 46.4763 155.498 47.5947 155.282 48.0459C155.066 48.4972 154.89 49.3016 154.792 49.694C154.694 50.0864 154.262 50.8123 154.262 50.8123L149.847 52.8136L145.256 55.011L144.06 55.9135L139.998 56.0901H138.841L137.369 54.8933L136.427 54.187L134.014 54.1478L131.915 54.187L130.718 54.1478L128.756 54.2458C128.756 54.2458 128.05 53.7161 127.598 53.4807C127.147 53.2648 127.01 53.1668 126.657 53.1668C126.303 53.1668 124.91 54.4224 124.91 54.4224L122.281 58.1698L119.201 59.6806L117.023 60.485L113.59 60.7008C113.59 60.7008 111.176 62.0939 110.823 62.4863C110.47 62.8787 108.547 64.5463 108.547 64.5463L108.096 67.2735L106.703 68.745L105.408 68.8431L105.016 70.7267L103.819 71.8842L103.78 73.807L100.837 76.5734L99.581 77.6525L97.9722 77.6918L97.1285 79.124L94.5779 80.4582L93.5577 80.9094L92.4393 81.498L92.1254 82.5183L91.1444 83.5385L88.7312 84.1663L87.0831 84.9315L86.9653 85.01L86.1021 83.205L83.3357 82.0474L81.099 78.3784L79.8433 74.4544L79.9414 71.5114L79.4117 70.6089C79.4117 70.6089 77.0965 69.7064 76.194 69.0001C75.2915 68.2938 75.6643 67.7444 75.6643 67.7444C75.6643 67.7444 73.4276 66.8615 72.9763 66.7634C72.5251 66.6653 70.7396 68.3723 70.7396 68.3723C70.7396 68.3723 70.3865 68.6469 69.2289 68.7254C68.0713 68.8235 66.1878 68.902 66.1878 68.902L64.5005 70.9621L60.9296 74.7095H58.8695L57.7904 74.3563L56.3582 73.8266L56.8879 70.8836L57.6923 69.3729L57.7904 68.2938L57.2607 67.2147L56.1031 66.8615L54.8474 66.9596L54.2196 67.6659L52.4342 68.6469L50.1975 68.745L48.1374 70.0792L46.45 72.5709L46.0969 73.0222L40.9172 74.1013L38.9552 72.9437L34.58 73.1203L31.892 71.3349L29.8319 68.0387L29.3022 66.6064L28.2231 64.9191L27.4187 64.6444H26.163L24.2795 65.802L21.9643 65.3508L20.4535 66.2533L19.1979 67.8621L17.3143 67.509C17.3143 67.509 14.0182 66.3514 13.2923 66.2533C12.8606 66.1944 12.4094 66.8811 12.1347 67.4305L10.879 65.233H9.93725L7.66133 64.9584L6.99425 62.9571L6.18983 59.2097L5.11075 58.5426L3.22719 57.8755L1.61833 56.404V54.7952L2.95254 52.2446L3.22719 49.3016V46.4959L2.69747 44.0827L0.813965 42.4738L2.28546 39.5308L3.61961 37.2549L5.36576 35.6461L6.03283 33.6448C6.03283 33.6448 6.1702 31.7613 6.30754 30.7018L7.64169 29.8974L8.30876 28.5633V26.562L8.03411 26.0323L6.42526 24.6981L4.42404 23.364L3.22719 22.6969L2.14811 21.8925L1.8734 20.0089L2.01076 18.0077L3.75696 14.1229L5.22846 12.2394L5.89554 11.1603L11.3891 6.3338L13.665 2.44905L14.96 0.133905H15.1758L20.944 0.310478L24.1618 0.663624L31.1661 2.13512L31.8332 2.52752L33.6186 4.90155L35.0508 5.60787L36.1692 6.19648L38.0527 7.09898L38.3274 7.68759L38.3666 10.0028L38.7198 11.023L40.054 12.5337L40.4463 14.1426L39.3673 14.3192L38.347 14.1426L37.9938 14.1033L37.5033 14.4565L37.0128 14.9078L37.6015 17.0071L38.2685 17.6349L41.133 16.5558L42.0748 15.7907L43.0165 15.9672L42.7026 17.3603L43.3697 18.5571L44.1349 20.4798L45.2533 21.7748L46.3323 22.0494L47.0975 19.9893L47.0583 19.0083L47.8235 18.0273L47.5095 16.8305L46.1754 15.7122L45.783 14.6331L44.6646 13.554L42.6634 12.573L41.7216 11.7686V11.1015L42.6242 10.6502L44.7628 10.4736L45.0374 9.70844L45.1355 8.59012L44.8216 7.78569L42.1925 6.62812L41.9178 6.17684L40.4463 5.05851L39.5046 4.15598C39.5046 4.15598 38.7983 3.44968 38.7983 3.07691C38.7983 2.70413 39.5046 2.23324 40.0932 2.05666C40.6818 1.88008 42.1925 1.60541 42.1925 1.60541L45.3121 1.78198L48.2158 2.80223L49.5108 4.09712L50.6291 5.0389L51.2177 5.49016L53.1405 4.33258H53.7291L56.0443 4.96041L57.7315 6.11798L59.1638 6.70659L59.7524 6.92241L61.0866 9.23758L61.7144 11.9648L61.6752 13.0438L66.2663 13.0831L70.1903 14.1033C70.1903 14.1033 71.701 15.2609 72.1523 15.7514C72.6035 16.2419 74.1535 17.8115 74.1535 17.8115L76.2528 19.5969L80.0983 21.9121L82.6882 22.4026L83.885 23.1678C83.885 23.1678 85.4546 23.0697 86.0628 23.0697C86.671 23.0697 91.066 23.4228 91.066 23.4228L94.7349 23.776L100.797 23.2855L104.82 23.5602L106.919 24.188L110.215 24.7178L118.122 25.9146L120.574 25.6007C120.574 25.6007 122.713 26.0911 123.203 26.5424C123.694 26.9937 125.578 27.9354 125.578 27.9354C125.578 27.9354 127.265 28.6417 128.383 28.5633C129.502 28.4652 133.426 27.9747 133.426 27.9747L136.682 27.5823L138.291 26.6405L140.842 26.3658L142.725 27.3861L144.295 29.1715L144.884 31.4082L145.099 33.1936L148.317 36.5486C148.317 36.5486 153.889 39.4524 154.027 39.5897C154.164 39.7271 155.361 40.9827 155.812 41.689C156.263 42.3954 156.793 43.1213 156.97 43.8669C157.146 44.6124 156.479 46.5548 156.479 46.5548L156.401 46.4763Z" fill="#DFDBD2" fill-opacity="0.11" />
                <path d="M156.401 46.4763C156.401 46.4763 155.498 47.5947 155.282 48.0459C155.066 48.4972 154.89 49.3016 154.792 49.694C154.694 50.0864 154.262 50.8123 154.262 50.8123L149.847 52.8136L145.256 55.011L144.06 55.9135L139.998 56.0901H138.841L137.369 54.8933L136.427 54.187L134.014 54.1478L131.915 54.187L130.718 54.1478L128.756 54.2458C128.756 54.2458 128.05 53.7161 127.598 53.4807C127.147 53.2648 127.01 53.1668 126.657 53.1668C126.303 53.1668 124.91 54.4224 124.91 54.4224L122.281 58.1698L119.201 59.6806L117.023 60.485L113.59 60.7008C113.59 60.7008 111.176 62.0939 110.823 62.4863C110.47 62.8787 108.547 64.5463 108.547 64.5463L108.096 67.2735L106.703 68.745L105.408 68.8431L105.016 70.7267L103.819 71.8842L103.78 73.807L100.837 76.5734L99.581 77.6525L97.9722 77.6918L97.1285 79.124L94.5779 80.4582L93.5577 80.9094L92.4393 81.498L92.1254 82.5183L91.1444 83.5385L88.7312 84.1663L87.0831 84.9315L86.9653 85.01L86.1021 83.205L83.3357 82.0474L81.099 78.3784L79.8433 74.4544L79.9414 71.5114L79.4117 70.6089C79.4117 70.6089 77.0965 69.7064 76.194 69.0001C75.2915 68.2938 75.6643 67.7444 75.6643 67.7444C75.6643 67.7444 73.4276 66.8615 72.9763 66.7634C72.5251 66.6653 70.7396 68.3723 70.7396 68.3723C70.7396 68.3723 70.3865 68.6469 69.2289 68.7254C68.0713 68.8235 66.1878 68.902 66.1878 68.902L64.5005 70.9621L60.9296 74.7095H58.8695L57.7904 74.3563L56.3582 73.8266L56.8879 70.8836L57.6923 69.3729L57.7904 68.2938L57.2607 67.2147L56.1031 66.8615L54.8474 66.9596L54.2196 67.6659L52.4342 68.6469L50.1975 68.745L48.1374 70.0792L46.45 72.5709L46.0969 73.0222L40.9172 74.1013L38.9552 72.9437L34.58 73.1203L31.892 71.3349L29.8319 68.0387L29.3022 66.6064L28.2231 64.9191L27.4187 64.6444H26.163L24.2795 65.802L21.9643 65.3508L20.4535 66.2533L19.1979 67.8621L17.3143 67.509C17.3143 67.509 14.0182 66.3514 13.2923 66.2533C12.8606 66.1944 12.4094 66.8811 12.1347 67.4305L10.879 65.233H9.93725L7.66133 64.9584L6.99425 62.9571L6.18983 59.2097L5.11075 58.5426L3.22719 57.8755L1.61833 56.404V54.7952L2.95254 52.2446L3.22719 49.3016V46.4959L2.69747 44.0827L0.813965 42.4738L2.28546 39.5308L3.61961 37.2549L5.36576 35.6461L6.03283 33.6448C6.03283 33.6448 6.1702 31.7613 6.30754 30.7018L7.64169 29.8974L8.30876 28.5633V26.562L8.03411 26.0323L6.42526 24.6981L4.42404 23.364L3.22719 22.6969L2.14811 21.8925L1.8734 20.0089L2.01076 18.0077L3.75696 14.1229L5.22846 12.2394L5.89554 11.1603L11.3891 6.3338L13.665 2.44905L14.96 0.133905H15.1758L20.944 0.310478L24.1618 0.663624L31.1661 2.13512L31.8332 2.52752L33.6186 4.90155L35.0508 5.60787L36.1692 6.19648L38.0527 7.09898L38.3274 7.68759L38.3666 10.0028L38.7198 11.023L40.054 12.5337L40.4463 14.1426L39.3673 14.3192L38.347 14.1426L37.9938 14.1033L37.5033 14.4565L37.0128 14.9078L37.6015 17.0071L38.2685 17.6349L41.133 16.5558L42.0748 15.7907L43.0165 15.9672L42.7026 17.3603L43.3697 18.5571L44.1349 20.4798L45.2533 21.7748L46.3323 22.0494L47.0975 19.9893L47.0583 19.0083L47.8235 18.0273L47.5095 16.8305L46.1754 15.7122L45.783 14.6331L44.6646 13.554L42.6634 12.573L41.7216 11.7686V11.1015L42.6242 10.6502L44.7628 10.4736L45.0374 9.70844L45.1355 8.59012L44.8216 7.78569L42.1925 6.62812L41.9178 6.17684L40.4463 5.05851L39.5046 4.15598C39.5046 4.15598 38.7983 3.44968 38.7983 3.07691C38.7983 2.70413 39.5046 2.23324 40.0932 2.05666C40.6818 1.88008 42.1925 1.60541 42.1925 1.60541L45.3121 1.78198L48.2158 2.80223L49.5108 4.09712L50.6291 5.0389L51.2177 5.49016L53.1405 4.33258H53.7291L56.0443 4.96041L57.7315 6.11798L59.1638 6.70659L59.7524 6.92241L61.0866 9.23758L61.7144 11.9648L61.6752 13.0438L66.2663 13.0831L70.1903 14.1033C70.1903 14.1033 71.701 15.2609 72.1523 15.7514C72.6035 16.2419 74.1535 17.8115 74.1535 17.8115L76.2528 19.5969L80.0983 21.9121L82.6882 22.4026L83.885 23.1678C83.885 23.1678 85.4546 23.0697 86.0628 23.0697C86.671 23.0697 91.066 23.4228 91.066 23.4228L94.7349 23.776L100.797 23.2855L104.82 23.5602L106.919 24.188L110.215 24.7178L118.122 25.9146L120.574 25.6007C120.574 25.6007 122.713 26.0911 123.203 26.5424C123.694 26.9937 125.578 27.9354 125.578 27.9354C125.578 27.9354 127.265 28.6417 128.383 28.5633C129.502 28.4652 133.426 27.9747 133.426 27.9747L136.682 27.5823L138.291 26.6405L140.842 26.3658L142.725 27.3861L144.295 29.1715L144.884 31.4082L145.099 33.1936L148.317 36.5486C148.317 36.5486 153.889 39.4524 154.027 39.5897C154.164 39.7271 155.361 40.9827 155.812 41.689C156.263 42.3954 156.793 43.1213 156.97 43.8669C157.146 44.6124 156.479 46.5548 156.479 46.5548L156.401 46.4763Z" stroke="black" stroke-opacity="0.6" stroke-width="2.60047" mask="url(#path-1-inside-1_1733_8401)" />
            </g>
            <defs>
                <filter id="filter0_b_1733_8401" x="-23.186" y="-23.8661" width="204.186" height="132.876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1733_8401" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1733_8401" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default IslandFour;