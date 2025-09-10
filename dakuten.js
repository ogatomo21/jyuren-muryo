document.addEventListener('DOMContentLoaded', () => {
    const beforeText = document.getElementById('before-text');
    const afterText = document.getElementById('after-text');

    const copy = document.getElementById('copy');
    const share = document.getElementById('share');
    const clear = document.getElementById('clear');

    beforeText.addEventListener('input', () => {
        const text = beforeText.value;
        if(text.length === 0){
            afterText.value = "";
            return;
        }
        const convertedText = text.split("").join("゛")+"゛";
        afterText.value = convertedText;
    })

    copy.addEventListener('click', () => {
        const text = afterText.value;
        if(text.length === 0){
            alert("変換後のテキストが空です。");
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            alert("クリップボードにコピーしました。");
        }).catch(() => {
            alert("クリップボードへのコピーに失敗しました。");
        });
    })

    share.addEventListener('click', async () => {
        const text = afterText.value;
        if(text.length === 0){
            alert("変換後のテキストが空です。");
            return;
        }
        if(navigator.share){
            try{
                await navigator.share({
                    text: text
                });
            }catch(e){
                alert("シェアに失敗しました。");
                console.error(e);
            }
        }
    });

    clear.addEventListener('click', () => {
        beforeText.value = "";
        afterText.value = "";
        beforeText.focus();
    });
});

function conv(text){
    const beforeText = document.getElementById('before-text');
    const afterText = document.getElementById('after-text');
    const convertedText = text.split("").join("゛")+"゛";
    beforeText.value = text;
    afterText.value = convertedText;
}
