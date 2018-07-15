function showHideOther(foundVia) {
    var other = document.getElementById('other-group');
    if (foundVia == 'other') {
        other.style.display = 'block';
    }
    else {
        other.style.display = 'none';
    }
}

window.onload = function () {
    document.getElementById("dropdown").addEventListener('change', function() {showHideOther(this.value);});
}