const Configuration = require('../external/configuration');
const { ManagementClient } = require('@kentico/kontent-management');

function getContentManagementClient() {
    return new ManagementClient({
        projectId: Configuration.kenticoProjectId,
        apiKey: Configuration.kenticoContentManagementApiKey,
        retryStrategy: {
            addJitter: true,
            canRetryError: () => true, // retry all errors
            maxAttempts: 9,
            deltaBackoffMs: 1000,
            maxCumulativeWaitTimeMs: 180000 // 3 minutes
        }
    });
}

module.exports = {
    getContentManagementClient
};
