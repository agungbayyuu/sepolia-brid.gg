


    async function runScript() {
      for (let i = 0; i < 50; i++) {
        console.log(`Iteration ${i + 1}`);
        const actionButton = document.querySelector('button[data-test="action-button"]');
        if (actionButton) {
          // Klik elemen tombol
          actionButton.click();
        } else {
          console.log("Button not found");
        }
        await waitFor(1000);
        // Nomer 2
        const checkboxWrapper = document.querySelector('.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.css-yqibff');
        if (checkboxWrapper) {
          checkboxWrapper.click();
        }
        await waitFor(1000);
        // Nomer 3
        const confirmButton2 = document.querySelector('button[data-test="confirm-review-button"]');
        if (confirmButton2) {
          confirmButton2.click();
        }
        await waitFor(1000);
        // Nomer 5
        const closeButton = document.querySelector('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.close-button.css-129wa2u');
        if (closeButton) {
          closeButton.click();
        }
        await waitFor(1000);
        function waitFor(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        await waitFor(1000);
      }
    }

    runScript();