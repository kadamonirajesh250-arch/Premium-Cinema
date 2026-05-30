# Lightweight PowerShell Static File Server for Movie Theater App
$port = 8080
$prefix = "http://localhost:$port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==================================================" -ForegroundColor Green
    Write-Host "🎬 PREMIUM CINEMA LOCAL WEB SERVER IS ACTIVE!" -ForegroundColor Green
    Write-Host "👉 Access the app at: http://localhost:$port" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Yellow
    Write-Host "==================================================" -ForegroundColor Green

    $currentDir = Get-Location

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Map local file path safely
        $cleanPath = $urlPath.Replace("/", "\")
        if ($cleanPath.StartsWith("\")) {
            $cleanPath = $cleanPath.Substring(1)
        }
        $filePath = Join-Path $currentDir $cleanPath

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Basic mime type mappings
            if ($filePath.EndsWith(".html")) {
                $response.ContentType = "text/html; charset=utf-8"
            } elseif ($filePath.EndsWith(".css")) {
                $response.ContentType = "text/css; charset=utf-8"
            } elseif ($filePath.EndsWith(".js")) {
                $response.ContentType = "application/javascript; charset=utf-8"
            } elseif ($filePath.EndsWith(".jsx")) {
                $response.ContentType = "text/plain; charset=utf-8"
            } elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) {
                $response.ContentType = "image/jpeg"
            } elseif ($filePath.EndsWith(".png")) {
                $response.ContentType = "image/png"
            } elseif ($filePath.EndsWith(".webp")) {
                $response.ContentType = "image/webp"
            }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # File Not Found
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 File Not Found</h1><p>The file $urlPath could not be located in the workspace.</p>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errorMsg.Length
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "❌ Error starting server: $_" -ForegroundColor Red
} finally {
    $listener.Close()
}
